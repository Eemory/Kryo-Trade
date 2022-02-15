//SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

contract Transactions {                                 //contract
    uint transactionCount;                                 //transaction count declaration

    event Transfer(address from, address receiver, uint amount, string message, uint timestamp, string keyword);    //transfer event

    struct TransferStruct {                                     //struct for transfer
        address sender;
        address reciever;
        uint amount;
        string message;
        uint timestamp;
        string keyword;
    }

    TransferStruct[] transactions;                                //transfers array

    function addToBlockchain(address payable _reciever, uint _amount, string memory _message, string memory _keyword) public {  //adds transaction to blockchain
                                                                                                                                
            transactionCount += 1;
            transactions.push(TransferStruct(msg.sender, _reciever, _amount, _message, block.timestamp, _keyword));

            emit Transfer(msg.sender, _reciever, _amount, _message, block.timestamp, _keyword);
    }

    function getAllTransactions() public view returns (TransferStruct[] memory) {  //retrieves transactions data array
        return transactions;
    }

    function getTransactionCount() public view returns (uint) {                         //retrieves transactions count
       return transactionCount;
    }
}