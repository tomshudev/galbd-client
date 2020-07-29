import { Component, OnInit, OnDestroy } from '@angular/core';
import { MissionsService } from 'src/app/core/services/missions/missions.service';
import { timer, Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'gal-congratulations',
  templateUrl: './congratulations.component.html',
  styleUrls: ['./congratulations.component.less'],
})
export class CongratulationsComponent implements OnInit {
  currentProgress$ = this.missionService.getCurrProgress();

  constructor(private missionService: MissionsService) {}

  ngOnInit(): void {
    this.confetti();
  }

  randomInRange(min, max) {
    return Math.random() * (max - min) + min;
  }

  confetti() {
    let vars = {
      spread: 200,
      decay: 0.85,
      particleCount: 300,
    };

    var duration = 30 * 1000;
    var animationEnd = Date.now() + duration;
    var particleCount = 150;

    window['confetti'](
      Object.assign({}, vars, {
        particleCount,
        origin: {
          x: this.randomInRange(0.1, 0.3),
          y: this.randomInRange(0.2, 0.8),
        },
      })
    );
    window['confetti'](
      Object.assign({}, vars, {
        particleCount,
        origin: {
          x: this.randomInRange(0.7, 0.9),
          y: this.randomInRange(0.2, 0.8),
        },
      })
    );

    var interval = setInterval(
      function () {
        var timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
          return clearInterval(interval);
        }

        particleCount = 150 * (timeLeft / duration);
        // since particles fall down, start a bit higher than random
        window['confetti'](
          Object.assign({}, vars, {
            particleCount,
            origin: {
              x: this.randomInRange(0, 0.4),
              y: this.randomInRange(0.2, 0.8),
            },
          })
        );
        window['confetti'](
          Object.assign({}, vars, {
            particleCount,
            origin: {
              x: this.randomInRange(0.7, 1),
              y: this.randomInRange(0.2, 0.8),
            },
          })
        );
      }.bind(this),
      2000
    );
  }
}
