import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'subscribe',
  template: ``,
  styles: [
  ]
})
export class RedirectComponent2 implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.location.href = "https://www.youtube.com/channel/UCdL8y42H6uOMbl_ZF8u-XZQ?sub_confirmation=1"
  }

}
