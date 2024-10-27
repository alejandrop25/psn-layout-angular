import { Component, OnInit, Input } from '@angular/core';
import { CardLabelComponent } from "./card-label/card-label.component";
import { CardPricingComponent } from "./card-pricing/card-pricing.component";

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CardLabelComponent, CardPricingComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements OnInit{
  @Input()
  gameType:string = "Digital PS5";
  @Input()
  gamePrice:string = "R$ 399,90";
  @Input()
  gameCover:string = "";
  @Input()
  gameLabel: string = "";

  ngOnInit(): void {

  }
}
