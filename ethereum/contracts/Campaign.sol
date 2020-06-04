pragma solidity ^0.4.17;

contract CampaignFactory{
    address [] public deployedCampaigns;

    function createCampaign(uint minimum)public{
        address newCampaign = new Campaign(minimum, msg.sender);
        deployedCampaigns.push(newCampaign);

    }

    function getDeployedCampaigns() public view returns(address[]){
        return deployedCampaigns;
    }
}

contract Campaign{
   struct Request{  //this function will be for manager since manager will describe about the reason of contribution
       string description;
       uint value;
       address recipient;
       bool complete;
       uint approvalCount;//this variable is to keep count of yes votes. Votes with 'no'doesn't matters
       mapping(address => bool) approvals;
   }

    //these all are storage variables
   Request[]public requests;
   address public manager;//it shows address of manager  to people
   uint public minimumContribution;
   mapping(address=>bool) public approvers;

   uint public approversCount;

   modifier restricted(){
       require(msg.sender == manager);
       _;//when use modifier always use '_' in the end of its definition
   }
   function Campaign(uint minimum,address creator)public{
       manager = creator;
       minimumContribution = minimum;
   }
   function contribute () public payable{
       require (msg.value > minimumContribution);

       approvers[msg.sender]=true;
       approversCount++;
   }

   function createRequest(string description, uint value, address recipient)
   public restricted {
       //they should be always arrange according to above declaration order
       require(approvers[msg.sender]);
       Request memory newRequest = Request({
          description:description,
          value:value,
          recipient:recipient,
          complete:false,
          approvalCount:0
       });

       requests.push(newRequest);
   }

   function approveRequest(uint index)public{
       Request storage request =requests[index];
       require(approvers[msg.sender]);
       require(!request.approvals[msg.sender]);
       requests.approvals[msg.sender] = true;
       request.approvalCount++;

   }

   function finalizeRequest(uint index) public restricted{
       Request storage request = requests[index];
       require(!request.complete);
       require(request.approvalCount>(approversCount/ 2));
       require(!requests[index].complete);

       request.recipient.transfer(request.value);

       requests.complete = true;

   }
   function getRequestsCount()public view returns (uint){
       return requests.length;
   }
  function getSummary() public view returns(
    uint,uint,uint,uint,address
    ){
      return(
        minimumContribution,
        this.balance,
        requests.length,
        approversCount,
        manager
        );
    }

    function getAllRequests() public view returns(Request[]){
      return requests;
    }
}
