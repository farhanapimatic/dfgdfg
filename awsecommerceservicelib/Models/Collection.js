/**
 * AWSECommerceServiceLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io )
 */

;(function (angular) {
'use strict';

/**
 * Creates a instance of Collection
 *
 * @constructor
 */
angular.module('AWSECommerceServiceLib')
    .factory('Collection', ['BaseModel', CollectionModel]);

    function CollectionModel(BaseModel) {
        var Collection = function (obj) {
            if (obj === undefined || obj === null) {
                return;
            }
            this.collectionSummary = this.getValue(obj.collectionSummary);
            this.collectionParent = this.getValue(obj.collectionParent);
            this.collectionItem = this.getValue(obj.collectionItem);
        };

        Collection.prototype = new BaseModel();
        Collection.prototype.constructor = Collection;
    
        /**
         * Function containing information about the fields of this model
         * @return   {array}   Array of objects containing information about the fields
         */
        Collection.prototype.mappingInfo = function() {
            return BaseModel.prototype.mappingInfo.call(this).concat([
                { name: 'collectionSummary', realName: 'CollectionSummary', type: 'CollectionSummary' },
                { name: 'collectionParent', realName: 'CollectionParent', type: 'CollectionParent' },
                { name: 'collectionItem', realName: 'CollectionItem', array: true, type: 'CollectionItem' }
            ]);
        };
    
        /**
         * Function containing information about discriminator values
         * mapped with their corresponding model class names
         *
         * @return   {object}  Object containing Key-Value pairs mapping discriminator
         *                     values with their corresponding model classes
         */
        Collection.prototype.discriminatorMap = function() {
            return {};
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {CollectionSummary|null}
         */
        Collection.prototype.getCollectionSummary = function () {
            return this.collectionSummary;
        };
    
        /**
         * Setter for CollectionSummary
         * 
         * @param {CollectionSummary|null} value 
         */
        Collection.prototype.setCollectionSummary = function (value) {
            this.collectionSummary = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {CollectionParent|null}
         */
        Collection.prototype.getCollectionParent = function () {
            return this.collectionParent;
        };
    
        /**
         * Setter for CollectionParent
         * 
         * @param {CollectionParent|null} value 
         */
        Collection.prototype.setCollectionParent = function (value) {
            this.collectionParent = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {array|null}
         */
        Collection.prototype.getCollectionItem = function () {
            return this.collectionItem;
        };
    
        /**
         * Setter for CollectionItem
         * 
         * @param {array|null} value 
         */
        Collection.prototype.setCollectionItem = function (value) {
            this.collectionItem = value;
        };
    
        return Collection;
    }

}(angular));
