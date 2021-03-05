export = PlatformClient;
declare class PlatformClient {
    constructor(config: any);
    lead: Lead;
    theme: Theme;
    user: User;
    content: Content;
    companyProfile: CompanyProfile;
    inventory: Inventory;
}
import { Lead } from "./PlatformModels";
import { Theme } from "./PlatformModels";
import { User } from "./PlatformModels";
import { Content } from "./PlatformModels";
import { CompanyProfile } from "./PlatformModels";
import { Inventory } from "./PlatformModels";
