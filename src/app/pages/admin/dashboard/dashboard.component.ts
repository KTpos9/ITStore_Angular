import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/models/Order.model';
import { OrderService } from 'src/app/services/order.service';
import { Chart, registerables } from 'chart.js';
import { Product } from 'src/app/models/Product.model';
import { ProductsService } from 'src/app/services/products.service';
import * as moment from 'moment';
import { Member } from 'src/app/models/Member.model';
import { MemberService } from 'src/app/services/member.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  members: Member[];
  products: Product[];
  orders: Order[];
  Date: any;
  Profit: any;
  profitChart: any;
  categoryChart: any;

  totalProductsCount: number = 0;
  totalMemberCount: number = 0;
  categories: { name: string, count: number }[] = [];

  constructor(private orderService: OrderService, private productService: ProductsService, private memberService: MemberService) {
    Chart.register(...registerables);
  }

  ngOnInit(): void {
    this.getOrder();
    this.getProducts();
  }

  getMembers() {
    this.memberService.getMembers().subscribe({
      next: (member) => {
        this.members = member;
      },
      error: (response) => {
        console.log(response);
      },
      complete: () => {
        console.log("Successfully get members");
      }
    });
  }

  getProducts() {
    this.productService.getProducts().subscribe((products: Product[]) => {
      this.products = products;
      this.creatPieChart();
      this.totalProductsCount = products.length;
    });
  }

  creatPieChart() {
    const categoriesMap = new Map<string, number>();
    for (const product of this.products) {
      if (categoriesMap.has(product.productCategory)) {
        categoriesMap.set(product.productCategory, categoriesMap.get(product.productCategory) + 1);
      } else {
        categoriesMap.set(product.productCategory, 1);
      }
    }
    const labels = Array.from(categoriesMap.keys());
    const data = Array.from(categoriesMap.values());

    this.categoryChart = new Chart('pie-chart', {
      type: 'pie',
      data: {
        labels: labels,
        datasets: [{
          label: 'Categories',
          data: data,
        }]
      }
    });
  }

  calculateCategoryCount() {
    let categoriesMap = new Map<string, number>();
    for (let product of this.products) {
      if (categoriesMap.has(product.productCategory)) {
        categoriesMap.set(product.productCategory, categoriesMap.get(product.productCategory) + 1);
      } else {
        categoriesMap.set(product.productCategory, 1);
      }
    }
    categoriesMap.forEach((value: number, key: string) => {
      this.categories.push({ name: key, count: value });
    });
  }


  getOrder() {
    this.orderService.getOrders().subscribe({
      next: (order) => {
        this.orders = order;
        this.orders.sort((a, b) => new Date(a.orderDate).getTime() - new Date(b.orderDate).getTime());

        this.Date = this.orders.map(order => order.orderDate);
        this.Profit = this.orders.map(order => order.productPrice);
        this.creatChart();
      },
      error: (response) => {
        console.log(response);
      },
      complete: () => {
        console.log("Successfully get products");
      }
    });
  }

  creatChart() {
    const groupedOrdersByMonth = this.groupOrdersByMonth(this.orders);
    const chartData = this.getChartData(groupedOrdersByMonth);

    this.profitChart = new Chart('line-chart', {
      type: 'line',
      data: {
        labels: chartData.labels,
        datasets: [{
          label: 'Profit',
          data: chartData.data,
          borderWidth: 3,
          fill: false,
          backgroundColor: 'rgba(93, 175, 89, 0.1)',
          borderColor: '#3e95cd'
        }]
      }
    });
  }

  groupOrdersByMonth(orders: Order[]): Map<string, number> {
    const ordersByMonth = new Map<string, number>();
    orders.forEach(order => {
      const month = moment(order.orderDate).format('MMM YYYY');
      if (ordersByMonth.has(month)) {
        ordersByMonth.set(month, ordersByMonth.get(month) + order.productPrice);
      } else {
        ordersByMonth.set(month, order.productPrice);
      }
    });
    return ordersByMonth;
  }

  getChartData(groupedOrdersByMonth: Map<string, number>): { labels: string[], data: number[] } {
    const labels = Array.from(groupedOrdersByMonth.keys());
    const data = Array.from(groupedOrdersByMonth.values());
    return { labels, data };
  }
}
