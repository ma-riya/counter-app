import { BasePage } from "./basepage";

export class Counter extends BasePage {

     INCREMENT_BTN = '[class="fa fa-plus-circle"]';
     DECREMENT_BTN = '[class="fa fa-minus-circle"]';
     BASKET_COUNTER = '[class="badge badge-pill badge-info m-2"]';
     ITEM_COUNTER = '[class="badge m-2 badge-primary"]';
     ITEM_COUNTER_ZERO = '[class="badge m-2 badge-warning"]';
     ITEM_DELETE_BTN = '[class="fa fa-trash-o"]';
     RESTORE_BTN = '[class="fa fa-recycle"]';
     REFRESH_BTN = '[class="fa fa-refresh"]';

}