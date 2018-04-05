/**
 * AWSECommerceServiceLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io )
 */

;(function (angular) {
'use strict';

/**
 * Creates a instance of CartModifyResponse
 *
 * @constructor
 */
angular.module('AWSECommerceServiceLib')
    .factory('CartModifyResponse', ['BaseModel', CartModifyResponseModel]);

    function CartModifyResponseModel(BaseModel) {
        var CartModifyResponse = function (obj) {
            if (obj === undefined || obj === null) {
                return;
            }
            this.operationRequest = this.getValue(obj.operationRequest);
            this.cart = this.getValue(obj.cart);
        };

        CartModifyResponse.prototype = new BaseModel();
        CartModifyResponse.prototype.constructor = CartModifyResponse;
    
        /**
         * Function containing information about the fields of this model
         * @return   {array}   Array of objects containing information about the fields
         */
        CartModifyResponse.prototype.mappingInfo = function() {
            return BaseModel.prototype.mappingInfo.call(this).concat([
                { name: 'operationRequest', realName: 'OperationRequest', type: 'OperationRequest' },
                { name: 'cart', realName: 'Cart', array: true, type: 'Cart' }
            ]);
        };
    
        /**
         * Function containing information about discriminator values
         * mapped with their corresponding model class names
         *
         * @return   {object}  Object containing Key-Value pairs mapping discriminator
         *                     values with their corresponding model classes
         */
        CartModifyResponse.prototype.discriminatorMap = function() {
            return {};
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {OperationRequest|null}
         */
        CartModifyResponse.prototype.getOperationRequest = function () {
            return this.operationRequest;
        };
    
        /**
         * Setter for OperationRequest
         * 
         * @param {OperationRequest|null} value 
         */
        CartModifyResponse.prototype.setOperationRequest = function (value) {
            this.operationRequest = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {array|null}
         */
        CartModifyResponse.prototype.getCart = function () {
            return this.cart;
        };
    
        /**
         * Setter for Cart
         * 
         * @param {array|null} value 
         */
        CartModifyResponse.prototype.setCart = function (value) {
            this.cart = value;
        };
    
        return CartModifyResponse;
    }

}(angular));
