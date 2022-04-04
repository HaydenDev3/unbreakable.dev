import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'component',
  template: "", // the template
})
export class RedirectComponent1 implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.location.href = 'https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwi085ekjvr2AhV6xzgGHVFWBncQwqsBegQIBRAB&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DdQw4w9WgXcQ&usg=AOvVaw0aHtehaphMhOCAkCydRLZU';
  }

}
