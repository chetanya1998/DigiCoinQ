import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json'

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0x5556e6760a9Cf3Dc99fe7f2E2616632A11809c58'
);
export default instance;
