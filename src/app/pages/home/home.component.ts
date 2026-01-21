import { Component, AfterViewInit } from '@angular/core';
import { Engine } from '@tsparticles/engine';
import { loadAll } from '@tsparticles/all';
import { tsParticles } from '@tsparticles/engine';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {

  async ngAfterViewInit(): Promise<void> {
    await loadAll(tsParticles as unknown as Engine);

    tsParticles.load({
      id: 'tsparticles',
      options: {
        background: {
          color: { value: '#2f3437' }
        },
        fpsLimit: 60,
        particles: {
          number: { value: 80 },
          color: { value: '#9bdcff' },
          links: {
            enable: true,
            color: '#9bdcff',
            distance: 150
          },
          move: {
            enable: true,
            speed: 1
          }
        }
      }
    });
  }
}
