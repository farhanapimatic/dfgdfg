/**
 * AWSECommerceServiceLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io )
 */

;(function (angular) {
'use strict';

/**
 * Creates a instance of ItemSearchResponse
 *
 * @constructor
 */
angular.module('AWSECommerceServiceLib')
    .factory('ItemSearchResponse', ['BaseModel', ItemSearchResponseModel]);

    function ItemSearchResponseModel(BaseModel) {
        var ItemSearchResponse = function (obj) {
            if (obj === undefined || obj === null) {
                return;
            }
            this.operationRequest = this.getValue(obj.operationRequest);
            this.items = this.getValue(obj.items);
        };

        ItemSearchResponse.prototype = new BaseModel();
        ItemSearchResponse.prototype.constructor = ItemSearchResponse;
    
        /**
         * Function containing information about the fields of this model
         * @return   {array}   Array of objects containing information about the fields
         */
        ItemSearchResponse.prototype.mappingInfo = function() {
            return BaseModel.prototype.mappingInfo.call(this).concat([
                { name: 'operationRequest', realName: 'OperationRequest', type: 'OperationRequest' },
                { name: 'items', realName: 'Items', array: true, type: 'Items117' }
            ]);
        };
    
        /**
         * Function containing information about discriminator values
         * mapped with their corresponding model class names
         *
         * @return   {object}  Object containing Key-Value pairs mapping discriminator
         *                     values with their corresponding model classes
         */
        ItemSearchResponse.prototype.discriminatorMap = function() {
            return {};
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {OperationRequest|null}
         */
        ItemSearchResponse.prototype.getOperationRequest = function () {
            return this.operationRequest;
        };
    
        /**
         * Setter for OperationRequest
         * 
         * @param {OperationRequest|null} value 
         */
        ItemSearchResponse.prototype.setOperationRequest = function (value) {
            this.operationRequest = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {array|null}
         */
        ItemSearchResponse.prototype.getItems = function () {
            return this.items;
        };
    
        /**
         * Setter for Items
         * 
         * @param {array|null} value 
         */
        ItemSearchResponse.prototype.setItems = function (value) {
            this.items = value;
        };
    
        return ItemSearchResponse;
    }

}(angular));
