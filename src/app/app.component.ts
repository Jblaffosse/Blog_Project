import { Component } from '@angular/core';
import { PostClass } from './PostClassFile';
import construct = Reflect.construct;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  lastUpdate = new Date();

  posts = [new PostClass('Any news from Harry Potter?', 'After the great last movies, I am still waiting to have the movie about the adventure of his son!', 0, new Date()),
          new PostClass('The Amazonia forest is burning!', 'Nobody is talking about the Amazonia forest!! The Amazonia forest is the lungs of our planet, we need to protect it. ' +
            'It is just a shame how the brazilian government is dealing with its tragedy.' +
            'We need to mobilize everyone around the world in order to take serious actions about the fire. Our government can send people, ' +
            'money or even water planes!! #prayforamazonia', 0, new Date(2019,0o7, 20)),
          new PostClass('Is global warming real?', 'Scientific consensus is overwhelming: The planet is getting warmer, and humans are behind it.' +
            'In recent years, global warming and climate change have been the subject of a great deal of political controversy, ' +
            'especially in the U.S. But as the science becomes clearer and consensus grows impossible to ignore, debate is moving ' +
            'away from whether humans are causing warming and toward questions about how best to respond.' +
            'We need to change and take the global warming as a serious problem for the future generations.')];

}
