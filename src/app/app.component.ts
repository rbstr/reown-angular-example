import { Component } from '@angular/core';

import { createAppKit } from '@reown/appkit';
import { WagmiAdapter } from '@reown/appkit-adapter-wagmi';
import { mainnet } from '@reown/appkit/networks';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {

public appkit: ReturnType<typeof createAppKit>;
  constructor() {
    const projectId = 'YOUR_ID';
    
    const adapter = new WagmiAdapter({
      projectId,
      networks: [mainnet]
    });

    this.appkit = createAppKit({
      adapters: [adapter],
      networks: [mainnet],
      metadata: {
        name: 'Reown Angular App',
        description: 'Demo',
        url: window.location.origin,
        icons: []
      },
      projectId,
      features: {
        analytics: true
      }
    });
  }

  connectWallet() {
    this.appkit.open();
  }
}
