import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ROUTE_PATHS } from '../../../core/constants';
import { PageServiceService } from '../page-service.service';

@Component({
  selector: 'app-service-detail',
  templateUrl: './service-detail.component.html',
  styleUrls: ['./service-detail.component.scss'],
})
export class ServiceDetailComponent implements OnInit {
  constructor(
    public router: Router,
    public pageService: PageServiceService,
    private route: ActivatedRoute,
  ) {}

  public ngOnInit(): void {
    const detail_name = this.route.snapshot.paramMap.get('detail_name');
    this.pageService.detailName = detail_name || undefined;
  }

  protected readonly ROUTE_PATHS = ROUTE_PATHS;
}
