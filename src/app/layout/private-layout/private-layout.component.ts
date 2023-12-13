import { Router, RouterOutlet } from '@angular/router';
import {
  ChangeDetectionStrategy,
  Component,
  NgZone,
  OnInit,
  ViewChild,
  WritableSignal,
  inject,
  signal,
} from '@angular/core';

/** @title Responsive sidenav */
@Component({
  selector: 'app-components-layout',
  standalone: true,
  templateUrl: 'private-layout.component.html',
  styleUrls: ['private-layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrivateLayoutComponent {}
