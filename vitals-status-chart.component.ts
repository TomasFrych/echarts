import { ChangeDetectionStrategy, Component, computed, EventEmitter, input, Input, Output, Signal } from '@angular/core';
import { EChartsOption } from 'echarts';
import { NgxEchartsModule } from 'ngx-echarts';
import { transformChartDataToOptions } from './utils/transform-chart-data-to-options';

@Component({
  selector: 'aiomed-vitals-status-chart',
  standalone: true,
  imports: [NgxEchartsModule],
  templateUrl: './vitals-status-chart.component.html',
  styleUrl: './vitals-status-chart.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VitalsStatusChartComponent {
  @Output() buttonClick: EventEmitter<void> = new EventEmitter<void>();
  @Input() title: string = 'Vitals status';
  @Input({ required: true }) saveMinutesValue: number;
  @Input() buttonText: string = 'Lets do it';
  public readonly chartParams = input<{ total: number, reported: number, readyToReport: number }>({ total: 0, readyToReport: 0, reported: 0 });
  
  protected readonly chartOptions: Signal<EChartsOption> = computed(() => transformChartDataToOptions(this.chartParams()));
}

