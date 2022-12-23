import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { IMatrix } from '../models/interfaces.model';

@Component({
  selector: 'app-transformation-metrics',
  templateUrl: './transformation-metrics.component.html',
  styleUrls: ['./transformation-metrics.component.scss'],
})
export class TransformationMetricsComponent implements OnInit {
  public track: string = '';
  public year: string = '';
  public matrixData: IMatrix | undefined;
  public mid = -1;
  public end = -1;

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: any) => {
      this.track = params.track;
      this.year = params.year;
    });
    this.fetchData();
  }

  fetchData(): void {
    this.http
      .get<IMatrix>('../../assets/json/data.json')
      .subscribe((data: IMatrix) => {
        console.log(data);
        this.mid = Math.floor(data.summary.length / 2);
        this.end = data.summary.length;
        this.matrixData = data;
      });
  }
}
