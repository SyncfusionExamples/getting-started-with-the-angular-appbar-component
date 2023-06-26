import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { registerLicense } from '@syncfusion/ej2-base';
import { AppModule } from './app/app.module';

registerLicense("ORg4AjUWIQA/Gnt2VFhiQlJPcUBDWXxLflF1VWJbdVt1flRBcDwsT3RfQF5jT39Xd0dmXn5WeXFURA==");
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
