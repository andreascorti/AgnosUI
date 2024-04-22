const e=`import { SlotDirective, UseDirective, UseMultiDirective } from '@agnos-ui/angular-headless';
import { NgModule } from '@angular/core';
import { ModalBodyDirective, ModalComponent, ModalFooterDirective, ModalHeaderDirective, ModalStructureDirective, ModalTitleDirective, } from './components/modal/modal.component';
import { PaginationComponent, PaginationEllipsisDirective, PaginationFirstDirective, PaginationLastDirective, PaginationNextDirective, PaginationNumberDirective, PaginationPagesDirective, PaginationStructureDirective, PaginationPreviousDirective, } from './components/pagination/pagination.component';
import { RatingComponent, RatingStarDirective } from './components/rating/rating.component';
import { SelectBadgeLabelDirective, SelectComponent, SelectItemDirective } from './components/select/select.component';
import { AlertBodyDirective, AlertComponent, AlertStructureDirective } from './components/alert/alert.component';
import { AccordionDirective, AccordionItemComponent, AccordionHeaderDirective, AccordionBodyDirective, AccordionItemStructureDirective, } from './components/accordion/accordion.component';
import { SliderComponent, SliderHandleDirective, SliderLabelDirective, SliderStructureDirective } from './components/slider/slider.component';
import { ProgressbarComponent, ProgressbarStructureDirective } from './components/progressbar/progressbar.component';
import { ToastBodyDirective, ToastComponent, ToastHeaderDirective, ToastStructureDirective } from './components/toast/toast.component';
import * as i0 from "@angular/core";
/* istanbul ignore next */
const components = [
    SlotDirective,
    SelectComponent,
    SelectBadgeLabelDirective,
    SelectItemDirective,
    UseDirective,
    UseMultiDirective,
    RatingComponent,
    RatingStarDirective,
    PaginationComponent,
    PaginationEllipsisDirective,
    PaginationFirstDirective,
    PaginationLastDirective,
    PaginationNextDirective,
    PaginationNumberDirective,
    PaginationPreviousDirective,
    PaginationPagesDirective,
    PaginationStructureDirective,
    ModalComponent,
    ModalStructureDirective,
    ModalHeaderDirective,
    ModalTitleDirective,
    ModalBodyDirective,
    ModalFooterDirective,
    AlertComponent,
    AlertStructureDirective,
    AlertBodyDirective,
    AccordionDirective,
    AccordionItemComponent,
    AccordionHeaderDirective,
    AccordionBodyDirective,
    AccordionItemStructureDirective,
    SliderComponent,
    SliderHandleDirective,
    SliderLabelDirective,
    SliderStructureDirective,
    ProgressbarComponent,
    ProgressbarStructureDirective,
    ToastComponent,
    ToastStructureDirective,
    ToastBodyDirective,
    ToastHeaderDirective,
];
export class AgnosUIAngularModule {
    static { this.ɵfac = function AgnosUIAngularModule_Factory(t) { return new (t || AgnosUIAngularModule)(); }; }
    static { this.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: AgnosUIAngularModule }); }
    static { this.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({}); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AgnosUIAngularModule, [{
        type: NgModule,
        args: [{
                declarations: [],
                imports: components,
                exports: components,
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(AgnosUIAngularModule, { imports: [SlotDirective,
        SelectComponent,
        SelectBadgeLabelDirective,
        SelectItemDirective,
        UseDirective,
        UseMultiDirective,
        RatingComponent,
        RatingStarDirective,
        PaginationComponent,
        PaginationEllipsisDirective,
        PaginationFirstDirective,
        PaginationLastDirective,
        PaginationNextDirective,
        PaginationNumberDirective,
        PaginationPreviousDirective,
        PaginationPagesDirective,
        PaginationStructureDirective,
        ModalComponent,
        ModalStructureDirective,
        ModalHeaderDirective,
        ModalTitleDirective,
        ModalBodyDirective,
        ModalFooterDirective,
        AlertComponent,
        AlertStructureDirective,
        AlertBodyDirective,
        AccordionDirective,
        AccordionItemComponent,
        AccordionHeaderDirective,
        AccordionBodyDirective,
        AccordionItemStructureDirective,
        SliderComponent,
        SliderHandleDirective,
        SliderLabelDirective,
        SliderStructureDirective,
        ProgressbarComponent,
        ProgressbarStructureDirective,
        ToastComponent,
        ToastStructureDirective,
        ToastBodyDirective,
        ToastHeaderDirective], exports: [SlotDirective,
        SelectComponent,
        SelectBadgeLabelDirective,
        SelectItemDirective,
        UseDirective,
        UseMultiDirective,
        RatingComponent,
        RatingStarDirective,
        PaginationComponent,
        PaginationEllipsisDirective,
        PaginationFirstDirective,
        PaginationLastDirective,
        PaginationNextDirective,
        PaginationNumberDirective,
        PaginationPreviousDirective,
        PaginationPagesDirective,
        PaginationStructureDirective,
        ModalComponent,
        ModalStructureDirective,
        ModalHeaderDirective,
        ModalTitleDirective,
        ModalBodyDirective,
        ModalFooterDirective,
        AlertComponent,
        AlertStructureDirective,
        AlertBodyDirective,
        AccordionDirective,
        AccordionItemComponent,
        AccordionHeaderDirective,
        AccordionBodyDirective,
        AccordionItemStructureDirective,
        SliderComponent,
        SliderHandleDirective,
        SliderLabelDirective,
        SliderStructureDirective,
        ProgressbarComponent,
        ProgressbarStructureDirective,
        ToastComponent,
        ToastStructureDirective,
        ToastBodyDirective,
        ToastHeaderDirective] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWdub3MtdWktYW5ndWxhci5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvYWdub3MtdWktYW5ndWxhci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLGFBQWEsRUFBRSxZQUFZLEVBQUUsaUJBQWlCLEVBQUMsTUFBTSw0QkFBNEIsQ0FBQztBQUMxRixPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3ZDLE9BQU8sRUFDTixrQkFBa0IsRUFDbEIsY0FBYyxFQUNkLG9CQUFvQixFQUNwQixvQkFBb0IsRUFDcEIsdUJBQXVCLEVBQ3ZCLG1CQUFtQixHQUNuQixNQUFNLG9DQUFvQyxDQUFDO0FBQzVDLE9BQU8sRUFDTixtQkFBbUIsRUFDbkIsMkJBQTJCLEVBQzNCLHdCQUF3QixFQUN4Qix1QkFBdUIsRUFDdkIsdUJBQXVCLEVBQ3ZCLHlCQUF5QixFQUN6Qix3QkFBd0IsRUFDeEIsNEJBQTRCLEVBQzVCLDJCQUEyQixHQUMzQixNQUFNLDhDQUE4QyxDQUFDO0FBQ3RELE9BQU8sRUFBQyxlQUFlLEVBQUUsbUJBQW1CLEVBQUMsTUFBTSxzQ0FBc0MsQ0FBQztBQUMxRixPQUFPLEVBQUMseUJBQXlCLEVBQUUsZUFBZSxFQUFFLG1CQUFtQixFQUFDLE1BQU0sc0NBQXNDLENBQUM7QUFDckgsT0FBTyxFQUFDLGtCQUFrQixFQUFFLGNBQWMsRUFBRSx1QkFBdUIsRUFBQyxNQUFNLG9DQUFvQyxDQUFDO0FBQy9HLE9BQU8sRUFDTixrQkFBa0IsRUFDbEIsc0JBQXNCLEVBQ3RCLHdCQUF3QixFQUN4QixzQkFBc0IsRUFDdEIsK0JBQStCLEdBQy9CLE1BQU0sNENBQTRDLENBQUM7QUFDcEQsT0FBTyxFQUFDLGVBQWUsRUFBRSxxQkFBcUIsRUFBRSxvQkFBb0IsRUFBRSx3QkFBd0IsRUFBQyxNQUFNLHNDQUFzQyxDQUFDO0FBQzVJLE9BQU8sRUFBQyxvQkFBb0IsRUFBRSw2QkFB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N0IsY0FBYztRQUNkLHVCQUF1QjtRQUN2QixrQkFBa0I7UUFDbEIsb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtTbG90RGlyZWN0aXZlLCBVc2VEaXJlY3RpdmUsIFVzZU11bHRpRGlyZWN0aXZlfSBmcm9tICdAYWdub3MtdWkvYW5ndWxhci1oZWFkbGVzcyc7XG5pbXBvcnQge05nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG5cdE1vZGFsQm9keURpcmVjdGl2ZSxcblx0TW9kYWxDb21wb25lbnQsXG5cdE1vZGFsRm9vdGVyRGlyZWN0aXZlLFxuXHRNb2RhbEhlYWRlckRpcmVjdGl2ZSxcblx0TW9kYWxTdHJ1Y3R1cmVEaXJlY3RpdmUsXG5cdE1vZGFsVGl0bGVEaXJlY3RpdmUsXG59IGZyb20gJy4vY29tcG9uZW50cy9tb2RhbC9tb2RhbC5jb21wb25lbnQnO1xuaW1wb3J0IHtcblx0UGFnaW5hdGlvbkNvbXBvbmVudCxcblx0UGFnaW5hdGlvbkVsbGlwc2lzRGlyZWN0aXZlLFxuXHRQYWdpbmF0aW9uRmlyc3REaXJlY3RpdmUsXG5cdFBhZ2luYXRpb25MYXN0RGlyZWN0aXZlLFxuXHRQYWdpbmF0aW9uTmV4dERpcmVjdGl2ZSxcblx0UGFnaW5hdGlvbk51bWJlckRpcmVjdGl2ZSxcblx0UGFnaW5hdGlvblBhZ2VzRGlyZWN0aXZlLFxuXHRQYWdpbmF0aW9uU3RydWN0dXJlRGlyZWN0aXZlLFxuXHRQYWdpbmF0aW9uUHJldmlvdXNEaXJlY3RpdmUsXG59IGZyb20gJy4vY29tcG9uZW50cy9wYWdpbmF0aW9uL3BhZ2luYXRpb24uY29tcG9uZW50JztcbmltcG9ydCB7UmF0aW5nQ29tcG9uZW50LCBSYXRpbmdTdGFyRGlyZWN0aXZlfSBmcm9tICcuL2NvbXBvbmVudHMvcmF0aW5nL3JhdGluZy5jb21wb25lbnQnO1xuaW1wb3J0IHtTZWxlY3RCYWRnZUxhYmVsRGlyZWN0aXZlLCBTZWxlY3RDb21wb25lbnQsIFNlbGVjdEl0ZW1EaXJlY3RpdmV9IGZyb20gJy4vY29tcG9uZW50cy9zZWxlY3Qvc2VsZWN0LmNvbXBvbmVudCc7XG5pbXBvcnQge0FsZXJ0Qm9keURpcmVjdGl2ZSwgQWxlcnRDb21wb25lbnQsIEFsZXJ0U3RydWN0dXJlRGlyZWN0aXZlfSBmcm9tICcuL2NvbXBvbmVudHMvYWxlcnQvYWxlcnQuY29tcG9uZW50JztcbmltcG9ydCB7XG5cdEFjY29yZGlvbkRpcmVjdGl2ZSxcblx0QWNjb3JkaW9uSXRlbUNvbXBvbmVudCxcblx0QWNjb3JkaW9uSGVhZGVyRGlyZWN0aXZlLFxuXHRBY2NvcmRpb25Cb2R5RGlyZWN0aXZlLFxuXHRBY2NvcmRpb25JdGVtU3RydWN0dXJlRGlyZWN0aXZlLFxufSBmcm9tICcuL2NvbXBvbmVudHMvYWNjb3JkaW9uL2FjY29yZGlvbi5jb21wb25lbnQnO1xuaW1wb3J0IHtTbGlkZXJDb21wb25lbnQsIFNsaWRlckhhbmRsZURpcmVjdGl2ZSwgU2xpZGVyTGFiZWxEaXJlY3RpdmUsIFNsaWRlclN0cnVjdHVyZURpcmVjdGl2ZX0gZnJvbSAnLi9jb21wb25lbnRzL3NsaWRlci9zbGlkZXIuY29tcG9uZW50JztcbmltcG9ydCB7UHJvZ3Jlc3NiYXJDb21wb25lbnQsIFByb2dyZXNzYmFyU3RydWN0dXJlRGlyZWN0aXZlfSBmcm9tICcuL2NvbXBvbmVudHMvcHJvZ3Jlc3NiYXIvcHJvZ3Jlc3NiYXIuY29tcG9uZW50JztcbmltcG9ydCB7VG9hc3RCb2R5RGlyZWN0aXZlLCBUb2FzdENvbXBvbmVudCwgVG9hc3RIZWFkZXJEaXJlY3RpdmUsIFRvYXN0U3RydWN0dXJlRGlyZWN0aXZlfSBmcm9tICcuL2NvbXBvbmVudHMvdG9hc3QvdG9hc3QuY29tcG9uZW50Jztcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG5jb25zdCBjb21wb25lbnRzID0gW1xuXHRTbG90RGlyZWN0aXZlLFxuXHRTZWxlY3RDb21wb25lbnQsXG5cdFNlbGVjdEJhZGdlTGFiZWxEaXJlY3RpdmUsXG5cdFNlbGVjdEl0ZW1EaXJlY3RpdmUsXG5cdFVzZURpcmVjdGl2ZSxcblx0VXNlTXVsdGlEaXJlY3RpdmUsXG5cdFJhdGluZ0NvbXBvbmVudCxcblx0UmF0aW5nU3RhckRpcmVjdGl2ZSxcblx0UGFnaW5hdGlvbkNvbXBvbmVudCxcblx0UGFnaW5hdGlvbkVsbGlwc2lzRGlyZWN0aXZlLFxuXHRQYWdpbmF0aW9uRmlyc3REaXJlY3RpdmUsXG5cdFBhZ2luYXRpb25MYXN0RGlyZWN0aXZlLFxuXHRQYWdpbmF0aW9uTmV4dERpcmVjdGl2ZSxcblx0UGFnaW5hdGlvbk51bWJlckRpcmVjdGl2ZSxcblx0UGFnaW5hdGlvblByZXZpb3VzRGlyZWN0aXZlLFxuXHRQYWdpbmF0aW9uUGFnZXNEaXJlY3RpdmUsXG5cdFBhZ2luYXRpb25TdHJ1Y3R1cmVEaXJlY3RpdmUsXG5cdE1vZGFsQ29tcG9uZW50LFxuXHRNb2RhbFN0cnVjdHVyZURpcmVjdGl2ZSxcblx0TW9kYWxIZWFkZXJEaXJlY3RpdmUsXG5cdE1vZGFsVGl0bGVEaXJlY3RpdmUsXG5cdE1vZGFsQm9keURpcmVjdGl2ZSxcblx0TW9kYWxGb290ZXJEaXJlY3RpdmUsXG5cdEFsZXJ0Q29tcG9uZW50LFxuXHRBbGVydFN0cnVjdHVyZURpcmVjdGl2ZSxcblx0QWxlcnRCb2R5RGlyZWN0aXZlLFxuXHRBY2NvcmRpb25EaXJlY3RpdmUsXG5cdEFjY29yZGlvbkl0ZW1Db21wb25lbnQsXG5cdEFjY29yZGlvbkhlYWRlckRpcmVjdGl2ZSxcblx0QWNjb3JkaW9uQm9keURpcmVjdGl2ZSxcblx0QWNjb3JkaW9uSXRlbVN0cnVjdHVyZURpcmVjdGl2ZSxcblx0U2xpZGVyQ29tcG9uZW50LFxuXHRTbGlkZXJIYW5kbGVEaXJlY3RpdmUsXG5cdFNsaWRlckxhYmVsRGlyZWN0aXZlLFxuXHRTbGlkZXJTdHJ1Y3R1cmVEaXJlY3RpdmUsXG5cdFByb2dyZXNzYmFyQ29tcG9uZW50LFxuXHRQcm9ncmVzc2JhclN0cnVjdHVyZURpcmVjdGl2ZSxcblx0VG9hc3RDb21wb25lbnQsXG5cdFRvYXN0U3RydWN0dXJlRGlyZWN0aXZlLFxuXHRUb2FzdEJvZHlEaXJlY3RpdmUsXG5cdFRvYXN0SGVhZGVyRGlyZWN0aXZlLFxuXTtcblxuQE5nTW9kdWxlKHtcblx0ZGVjbGFyYXRpb25zOiBbXSxcblx0aW1wb3J0czogY29tcG9uZW50cyxcblx0ZXhwb3J0czogY29tcG9uZW50cyxcbn0pXG5leHBvcnQgY2xhc3MgQWdub3NVSUFuZ3VsYXJNb2R1bGUge31cbiJdfQ==`;export{e as default};
