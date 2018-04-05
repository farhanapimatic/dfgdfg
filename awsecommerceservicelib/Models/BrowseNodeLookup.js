/**
 * AWSECommerceServiceLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io )
 */

;(function (angular) {
'use strict';

/**
 * Creates a instance of BrowseNodeLookup
 *
 * @constructor
 */
angular.module('AWSECommerceServiceLib')
    .factory('BrowseNodeLookup', ['BaseModel', BrowseNodeLookupModel]);

    function BrowseNodeLookupModel(BaseModel) {
        var BrowseNodeLookup = function (obj) {
            if (obj === undefined || obj === null) {
                return;
            }
            this.marketplaceDomain = this.getValue(obj.marketplaceDomain);
            this.aWSAccessKeyId = this.getValue(obj.aWSAccessKeyId);
            this.associateTag = this.getValue(obj.associateTag);
            this.validate = this.getValue(obj.validate);
            this.xMLEscaping = this.getValue(obj.xMLEscaping);
            this.shared = this.getValue(obj.shared);
            this.request = this.getValue(obj.request);
        };

        BrowseNodeLookup.prototype = new BaseModel();
        BrowseNodeLookup.prototype.constructor = BrowseNodeLookup;
    
        /**
         * Function containing information about the fields of this model
         * @return   {array}   Array of objects containing information about the fields
         */
        BrowseNodeLookup.prototype.mappingInfo = function() {
            return BaseModel.prototype.mappingInfo.call(this).concat([
                { name: 'marketplaceDomain', realName: 'MarketplaceDomain' },
                { name: 'aWSAccessKeyId', realName: 'AWSAccessKeyId' },
                { name: 'associateTag', realName: 'AssociateTag' },
                { name: 'validate', realName: 'Validate' },
                { name: 'xMLEscaping', realName: 'XMLEscaping' },
                { name: 'shared', realName: 'Shared', type: 'BrowseNodeLookupRequest' },
                { name: 'request', realName: 'Request', array: true, type: 'BrowseNodeLookupRequest' }
            ]);
        };
    
        /**
         * Function containing information about discriminator values
         * mapped with their corresponding model class names
         *
         * @return   {object}  Object containing Key-Value pairs mapping discriminator
         *                     values with their corresponding model classes
         */
        BrowseNodeLookup.prototype.discriminatorMap = function() {
            return {};
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {string|null}
         */
        BrowseNodeLookup.prototype.getMarketplaceDomain = function () {
            return this.marketplaceDomain;
        };
    
        /**
         * Setter for MarketplaceDomain
         * 
         * @param {string|null} value 
         */
        BrowseNodeLookup.prototype.setMarketplaceDomain = function (value) {
            this.marketplaceDomain = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {string|null}
         */
        BrowseNodeLookup.prototype.getAWSAccessKeyId = function () {
            return this.aWSAccessKeyId;
        };
    
        /**
         * Setter for AWSAccessKeyId
         * 
         * @param {string|null} value 
         */
        BrowseNodeLookup.prototype.setAWSAccessKeyId = function (value) {
            this.aWSAccessKeyId = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {string|null}
         */
        BrowseNodeLookup.prototype.getAssociateTag = function () {
            return this.associateTag;
        };
    
        /**
         * Setter for AssociateTag
         * 
         * @param {string|null} value 
         */
        BrowseNodeLookup.prototype.setAssociateTag = function (value) {
            this.associateTag = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {string|null}
         */
        BrowseNodeLookup.prototype.getValidate = function () {
            return this.validate;
        };
    
        /**
         * Setter for Validate
         * 
         * @param {string|null} value 
         */
        BrowseNodeLookup.prototype.setValidate = function (value) {
            this.validate = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {string|null}
         */
        BrowseNodeLookup.prototype.getXMLEscaping = function () {
            return this.xMLEscaping;
        };
    
        /**
         * Setter for XMLEscaping
         * 
         * @param {string|null} value 
         */
        BrowseNodeLookup.prototype.setXMLEscaping = function (value) {
            this.xMLEscaping = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {BrowseNodeLookupRequest|null}
         */
        BrowseNodeLookup.prototype.getShared = function () {
            return this.shared;
        };
    
        /**
         * Setter for Shared
         * 
         * @param {BrowseNodeLookupRequest|null} value 
         */
        BrowseNodeLookup.prototype.setShared = function (value) {
            this.shared = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {array|null}
         */
        BrowseNodeLookup.prototype.getRequest = function () {
            return this.request;
        };
    
        /**
         * Setter for Request
         * 
         * @param {array|null} value 
         */
        BrowseNodeLookup.prototype.setRequest = function (value) {
            this.request = value;
        };
    
        return BrowseNodeLookup;
    }

}(angular));
