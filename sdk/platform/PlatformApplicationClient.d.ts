export = Application;
declare class Application {
    constructor(applicationId: any, config: any);
    config: any;
    companyId: any;
    applicationId: any;
    lead: Lead;
    theme: Theme;
    user: User;
    content: Content;
    communication: Communication;
    payment: Payment;
    order: Order;
    assets: Assets;
    share: Share;
    configuration: Configuration;
}
import { Lead } from "./PlatformApplicationModels";
import { Theme } from "./PlatformApplicationModels";
import { User } from "./PlatformApplicationModels";
import { Content } from "./PlatformApplicationModels";
import { Communication } from "./PlatformApplicationModels";
import { Payment } from "./PlatformApplicationModels";
import { Order } from "./PlatformApplicationModels";
import { Assets } from "./PlatformApplicationModels";
import { Share } from "./PlatformApplicationModels";
import { Configuration } from "./PlatformApplicationModels";
