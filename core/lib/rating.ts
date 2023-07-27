import {computed, writable} from '@amadeus-it-group/tansu';
import type {ConfigValidator, PropsConfig} from './services';
import {INVALID_VALUE, bindableDerived, stateStores, writablesForProps} from './services';
import {isNumber} from './services/checks';
import {typeBoolean, typeFunction, typeNumber, typeString} from './services/writables';
import type {SlotContent, Widget} from './types';

export interface StarContext {
	fill: number;
	index: number;
}

export interface RatingCommonPropsAndState {
	/**
	 * The current rating. Could be a decimal value like `3.75`.
	 */
	rating: number;

	/**
	 * The maximum rating that can be given.
	 */
	maxRating: number;

	/**
	 * If `true`, the rating is disabled.
	 */
	disabled: boolean;

	/**
	 * If `true`, the rating can't be changed.
	 */
	readonly: boolean;

	/**
	 * Define if the rating can be reset.
	 *
	 * If set to true, the user can 'unset' the rating value by cliking on the current rating value.
	 */
	resettable: boolean;

	/**
	 * Allows setting a custom rating tabindex.
	 * If the component is disabled, `tabindex` will still be set to `-1`.
	 */
	tabindex: number;

	/**
	 * Classname to be applied on the rating container
	 */
	className: string;

	/**
	 * The template to override the way each star is displayed.
	 */
	slotStar: SlotContent<StarContext>;

	/**
	 * The aria label
	 */
	ariaLabel: string;

	/**
	 * The aria labelled by
	 */
	ariaLabelledBy: string;
}

export interface RatingProps extends RatingCommonPropsAndState {
	/**
	 * Return the value for the 'aria-value' attribute.
	 * @param rating - Current rating value.
	 * @param maxRating - maxRating value.
	 */
	ariaValueTextFn: (rating: number, maxRating: number) => string;

	/**
	 * An event emitted when the rating is changed.
	 *
	 * Event payload is equal to the newly selected rating.
	 */
	onRatingChange: (rating: number) => void;

	/**
	 * An event emitted when the user is hovering over a given rating.
	 *
	 * Event payload is equal to the rating being hovered over.
	 */
	onHover: (rating: number) => void;

	/**
	 * An event emitted when the user stops hovering over a given rating.
	 *
	 * Event payload is equal to the rating of the last item being hovered over.
	 */
	onLeave: (rating: number) => void;
}

export interface RatingState extends RatingCommonPropsAndState {
	ariaValueText: string;
	visibleRating: number;
	isInteractive: boolean;
	stars: StarContext[];
}

export interface RatingActions {
	/**
	 * Method to be used when a star is clicked.
	 *
	 * To be used in the onclick event of a star
	 * @param index - Star index, starting from 1
	 */
	click(index: number): void;

	/**
	 * Method to be used when the mouse enter in a star.
	 *
	 * To be used in the onmouseenter of a star
	 * @param index - Star index, starting from 1
	 */
	hover(index: number): void;

	/**
	 * Method to be used when the mouse leave the widget.
	 *
	 * To be used in the onmouseleave of the rating container
	 */
	leave(): void;

	/**
	 * Method to be used to handle the keyboard.
	 *
	 * To be used in the onkeydown of the rating container
	 */
	handleKey(event: KeyboardEvent): void;
}

export type RatingWidget = Widget<RatingProps, RatingState, object, RatingActions>;

// TODO use getValueInRange
function adjustRating(rating: number, maxRating: number): number {
	return Math.max(Math.min(rating, maxRating), 0);
}

const noop = () => {};

const defaultConfig: RatingProps = {
	rating: 0,
	tabindex: 0,
	maxRating: 10,
	disabled: false,
	readonly: false,
	resettable: true,
	ariaValueTextFn: (rating: number, maxRating: number) => `${rating} out of ${maxRating}`,
	onHover: noop,
	onLeave: noop,
	onRatingChange: noop,
	className: '',
	slotStar: ({fill}) => String.fromCharCode(fill === 100 ? 9733 : 9734),
	ariaLabel: 'Rating',
	ariaLabelledBy: '',
};

export function getRatingDefaultConfig() {
	return {...defaultConfig};
}

// TODO export normalize function in utils and test them.
const configValidator: ConfigValidator<RatingProps> = {
	rating: typeNumber,
	tabindex: typeNumber,
	maxRating: {normalizeValue: (value) => (isNumber(value) ? Math.max(0, value) : INVALID_VALUE)},
	disabled: typeBoolean,
	readonly: typeBoolean,
	resettable: typeBoolean,
	ariaValueTextFn: typeFunction,
	onHover: typeFunction,
	onLeave: typeFunction,
	onRatingChange: typeFunction,
	className: typeString,
	ariaLabel: typeString,
	ariaLabelledBy: typeString,
};

export function createRating(config?: PropsConfig<RatingProps>): RatingWidget {
	const [
		{
			// dirty inputs that need adjustment:
			rating$: _dirtyRating$,
			tabindex$: _dirtyTabindex$,

			// clean inputs with value validation:
			ariaValueTextFn$,

			onHover$,
			onLeave$,
			onRatingChange$,

			...stateProps
		},
		patch,
	] = writablesForProps(defaultConfig, config, configValidator);
	const {maxRating$, disabled$, readonly$, resettable$} = stateProps;

	// clean inputs adjustment to valid range
	const tabindex$ = computed(() => (disabled$() ? -1 : _dirtyTabindex$()));

	const rating$ = bindableDerived(onRatingChange$, [_dirtyRating$, maxRating$], ([dirtyRating, maxRating]) => adjustRating(dirtyRating, maxRating));

	// internal inputs
	const _hoveredRating$ = writable(0);

	// computed
	const isInteractive$ = computed(() => !disabled$() && !readonly$());
	const visibleRating$ = computed(() => {
		const rating = rating$(); // call rating unconditionnally (for the bindableDerived to stay active)
		const hoveredRating = _hoveredRating$();
		return hoveredRating !== 0 ? hoveredRating : rating;
	});
	const ariaValueText$ = computed(() => ariaValueTextFn$()(visibleRating$(), maxRating$()));
	const stars$ = computed(() => {
		const visibleRating = visibleRating$();
		return Array.from({length: maxRating$()}, (v, i) => ({
			fill: Math.round(Math.max(Math.min(visibleRating - i, 1), 0) * 100),
			index: i,
		}));
	});

	return {
		...stateStores({
			ariaValueText$,
			isInteractive$,
			rating$,
			stars$,
			tabindex$,
			visibleRating$,
			...stateProps,
		}),
		patch,
		actions: {
			click: (index: number) => {
				if (isInteractive$() && index > 0 && index <= maxRating$()) {
					patch({rating: rating$() === index && resettable$() ? 0 : index});
				}
			},
			hover: (index: number) => {
				if (isInteractive$() && index > 0 && index <= maxRating$()) {
					_hoveredRating$.set(index);
					onHover$()(index);
				}
			},
			leave: () => {
				if (isInteractive$()) {
					onLeave$()(_hoveredRating$());
					_hoveredRating$.set(0);
				}
			},
			handleKey(event: KeyboardEvent) {
				if (isInteractive$()) {
					const {key} = event;
					switch (key) {
						case 'ArrowLeft':
						case 'ArrowDown':
							patch({rating: rating$() - 1});
							break;
						case 'ArrowRight':
						case 'ArrowUp':
							patch({rating: rating$() + 1});
							break;
						case 'Home':
						case 'PageDown':
							patch({rating: 0});
							break;
						case 'End':
						case 'PageUp':
							patch({rating: maxRating$()});
							break;
						default:
							return;
					}
					event.preventDefault();
					event.stopPropagation();
				}
			},
		},
		directives: {},
		api: {},
	};
}
