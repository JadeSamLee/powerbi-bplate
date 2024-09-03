import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isIframeVisible = false;
  sellingPrice: number = 0;
  costPrice: number = 0;
  quantity: number = 0;
  offerPercentage: number = 0;
  profitLoss: number | null = null;

  toggleIframe() {
    this.isIframeVisible = !this.isIframeVisible;
  }

  calculateProfitLoss() {
    // Calculate the offer price if an offer percentage is provided
    const offerDiscount = this.offerPercentage ? this.sellingPrice * (this.offerPercentage / 100) : 0;
    const finalSellingPrice = this.sellingPrice - offerDiscount;
    
    // Calculate profit or loss
    const totalCost = this.costPrice * this.quantity;
    const totalRevenue = finalSellingPrice * this.quantity;
    this.profitLoss = totalRevenue - totalCost;
  }
}
