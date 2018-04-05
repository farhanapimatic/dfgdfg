# Getting started

## How to Build

The generated SDK requires AngularJS framework to work. If you do not already have angular downloaded, please go ahead and do it from [here](https://angularjs.org/).
You will also need to download and link [angular-moment](https://cdnjs.cloudflare.com/ajax/libs/angular-moment/1.0.1/angular-moment.min.js) and [moment.js](https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.17.1/moment.min.js) with your project because the SDK internally uses moment.js.

## How to Use

The following section describes how to use the generated SDK in an existing/new project.

### 1. Configure Angular and Generated SDK
Perform the following steps to configure angular and the SDK:
+ Make a `scripts` folder inside the root folder of the project. If you already have a `scripts` folder, skip to the next step.
+ Move the `angular.min.js` file inside the scripts folder. 
+ Move the `AWSECommerceServiceLib` folder inside the scripts folder.
+ If any of the Custom Types in your API have `Date`/`Datetime` type fields or any endpoint has `Date`/`Datetime` response, you will need to download angular-moment and moment.js. Move these 2 files into the `scripts` folder as well.

![folder-structure-image](https://apidocs.io/illustration/angularjs?step=folderStructure&workspaceFolder=AWSECommerceService-Angular&projectName=AWSECommerceServiceLib)

### 2. Open Project Folder
Open an IDE/Text Editor for JavaScript like Sublime Text. The basic workflow presented here is also applicable if you prefer using a different editor or IDE.  
Click on `File` and select `Open Folder`

Select the folder of your SDK and click on `Select Folder` to open it up in Sublime Text. The folder will become visible in the bar on the left.

![open-folder-image](https://apidocs.io/illustration/angularjs?step=openFolder&workspaceFolder=AWSECommerceService-Angular)

### 3. Create an Angular Application
Since Angular JS is used for client-side web development, in order to use the generated library, you will have to develop an application first.
If you already have an angular application, [skip to Step 6](#6-include-sdk-references-in-html-file). Otherwise, follow these steps to create one:

+ In the IDE, click on `File` and choose `New File` to create a new file.
+ Add the following starting code in the file:
```js
var app = angular.module('myApp', []);
app.controller('testController', function($scope) 
{

});
```
+ Save it with the name `app.js` in the `scripts` folder.


### 4. Create HTML File
Skip to the next step if you are working with an existing project and already have an html file. Otherwise follow the steps to create one:
+ Inside the IDE, right click on the project folder name and select the `New File` option to create a new test file.
+ Save it with an appropriate name such as `index.html` in the root of your project folder.
`index.html` should look like this:
```html
<!DOCTYPE html>
<html>
<head>
	<title>Angular Project</title>
	<script></script>
</head>

<body>
</body>

</html>
```

![initial-html-code-image](https://apidocs.io/illustration/angularjs?step=initialCode&workspaceFolder=AWSECommerceService-Angular)

### 5. Including links to Angular in HTML file
Your HTML file needs to have a link to `angular.min.js` file to use Angular-JS. Add the link using `script` tags inside the `head` section of `index.html` like:
```html
<script src="scripts/angular.min.js" ></script>
```
If any of the Custom Types that you have defined have `Date`/`Datetime` type fields or any endpoint has `Date`/`Datetime` response, you will also need to link to angular-moment and moment.js like:
```html
<script src="scripts/angular.min.js" ></script>
<script src="scripts/moment.min.js" ></script>
<script src="scripts/angular-moment.min.js" ></script>
```

### 6. Include SDK references in HTML file
Import the reference to the generated SDK files inside your html file like:
```html
<head>
    ...
    <!-- Helper files -->
    <script src="scripts/AWSECommerceServiceLib/Module.js"></script>
    <script src="scripts/AWSECommerceServiceLib/Configuration.js"></script>
    <script src="scripts/AWSECommerceServiceLib/ModelFactory.js"></script>
    <script src="scripts/AWSECommerceServiceLib/ObjectMapper.js"></script>
    <script src="scripts/AWSECommerceServiceLib/APIHelper.js"></script>
    <script src="scripts/AWSECommerceServiceLib/Http/Client/HttpContext.js"></script>
    <script src="scripts/AWSECommerceServiceLib/Http/Client/HttpClient.js"></script>
    <script src="scripts/AWSECommerceServiceLib/Http/Request/HttpRequest.js"></script>
    <script src="scripts/AWSECommerceServiceLib/Http/Response/HttpResponse.js"></script>

    <!-- API Controllers -->
    <script src="scripts/AWSECommerceServiceLib/Controllers/BaseController.js"></script>
    <script src="scripts/AWSECommerceServiceLib/Controllers/AWSECommerceServiceBindingController.js"></script>


    <!-- Models -->
    <script src="scripts/AWSECommerceServiceLib/Models/BaseModel.js"></script>
    <script src="scripts/AWSECommerceServiceLib/Models/BinParameter.js"></script>
    <script src="scripts/AWSECommerceServiceLib/Models/Bin.js"></script>
    <script src="scripts/AWSECommerceServiceLib/Models/SearchBinSet.js"></script>
    <script src="scripts/AWSECommerceServiceLib/Models/SearchBinSets.js"></script>
    <script src="scripts/AWSECommerceServiceLib/Models/AvailabilityEnum.js"></script>
    <script src="scripts/AWSECommerceServiceLib/Models/AudienceRatingEnum.js"></script>
    <script src="scripts/AWSECommerceServiceLib/Models/ConditionEnum.js"></script>
    <script src="scripts/AWSECommerceServiceLib/Models/PositiveIntegerOrAllEnum.js"></script>
    <script src="scripts/AWSECommerceServiceLib/Models/ItemSearchRequest.js"></script>
    <script src="scripts/AWSECommerceServiceLib/Models/ItemSearch.js"></script>
    <script src="scripts/AWSECommerceServiceLib/Models/IdTypeEnum.js"></script>
    <script src="scripts/AWSECommerceServiceLib/Models/ItemLookupRequest.js"></script>
    <script src="scripts/AWSECommerceServiceLib/Models/ItemLookup.js"></script>
    <script src="scripts/AWSECommerceServiceLib/Models/SimilarityTypeEnum.js"></script>
    <script src="scripts/AWSECommerceServiceLib/Models/SimilarityLookupRequest.js"></script>
    <script src="scripts/AWSECommerceServiceLib/Models/SimilarityLookup.js"></script>
    <script src="scripts/AWSECommerceServiceLib/Models/CartGetRequest.js"></script>
    <script src="scripts/AWSECommerceServiceLib/Models/CartGet.js"></script>
    <script src="scripts/AWSECommerceServiceLib/Models/Item.js"></script>
    <script src="scripts/AWSECommerceServiceLib/Models/Items.js"></script>
    <script src="scripts/AWSECommerceServiceLib/Models/CartAddRequest.js"></script>
    <script src="scripts/AWSECommerceServiceLib/Models/CartAdd.js"></script>
    <script src="scripts/AWSECommerceServiceLib/Models/MetaData.js"></script>
    <script src="scripts/AWSECommerceServiceLib/Models/Item23.js"></script>
    <script src="scripts/AWSECommerceServiceLib/Models/Items24.js"></script>
    <script src="scripts/AWSECommerceServiceLib/Models/CartCreateRequest.js"></script>
    <script src="scripts/AWSECommerceServiceLib/Models/CartCreate.js"></script>
    <script src="scripts/AWSECommerceServiceLib/Models/ActionEnum.js"></script>
    <script src="scripts/AWSECommerceServiceLib/Models/Item28.js"></script>
    <script src="scripts/AWSECommerceServiceLib/Models/Items29.js"></script>
    <script src="scripts/AWSECommerceServiceLib/Models/CartModifyRequest.js"></script>
    <script src="scripts/AWSECommerceServiceLib/Models/CartModify.js"></script>
    <script src="scripts/AWSECommerceServiceLib/Models/CartClearRequest.js"></script>
    <script src="scripts/AWSECommerceServiceLib/Models/CartClear.js"></script>
    <script src="scripts/AWSECommerceServiceLib/Models/BrowseNodeLookupRequest.js"></script>
    <script src="scripts/AWSECommerceServiceLib/Models/BrowseNodeLookup.js"></script>
    <script src="scripts/AWSECommerceServiceLib/Models/Header.js"></script>
    <script src="scripts/AWSECommerceServiceLib/Models/HTTPHeaders.js"></script>
    <script src="scripts/AWSECommerceServiceLib/Models/Argument.js"></script>
    <script src="scripts/AWSECommerceServiceLib/Models/Arguments.js"></script>
    <script src="scripts/AWSECommerceServiceLib/Models/MError.js"></script>
    <script src="scripts/AWSECommerceServiceLib/Models/Errors.js"></script>
    <script src="scripts/AWSECommerceServiceLib/Models/OperationRequest.js"></script>
    <script src="scripts/AWSECommerceServiceLib/Models/Request.js"></script>
    <script src="scripts/AWSECommerceServiceLib/Models/CorrectedQuery.js"></script>
    <script src="scripts/AWSECommerceServiceLib/Models/SearchIndex.js"></script>
    <script src="scripts/AWSECommerceServiceLib/Models/SearchResultsMap.js"></script>
    <script src="scripts/AWSECommerceServiceLib/Models/ItemLink.js"></script>
    <script src="scripts/AWSECommerceServiceLib/Models/ItemLinks.js"></script>
    <script src="scripts/AWSECommerceServiceLib/Models/DecimalWithUnits.js"></script>
    <script src="scripts/AWSECommerceServiceLib/Models/Image.js"></script>
    <script src="scripts/AWSECommerceServiceLib/Models/ImageSet.js"></script>
    <script src="scripts/AWSECommerceServiceLib/Models/ImageSets.js"></script>
    <script src="scripts/AWSECommerceServiceLib/Models/CatalogNumberList.js"></script>
    <script src="scripts/AWSECommerceServiceLib/Models/Creator.js"></script>
    <script src="scripts/AWSECommerceServiceLib/Models/EANList.js"></script>
    <script src="scripts/AWSECommerceServiceLib/Models/ItemDimensions.js"></script>
    <script src="scripts/AWSECommerceServiceLib/Models/Language.js"></script>
    <script src="scripts/AWSECommerceServiceLib/Models/Languages.js"></script>
    <script src="scripts/AWSECommerceServiceLib/Models/Price.js"></script>
    <script src="scripts/AWSECommerceServiceLib/Models/PackageDimensions.js"></script>
    <script src="scripts/AWSECommerceServiceLib/Models/NonNegativeIntegerWithUnits.js"></script>
    <script src="scripts/AWSECommerceServiceLib/Models/UPCList.js"></script>
    <script src="scripts/AWSECommerceServiceLib/Models/ItemAttributes.js"></script>
    <script src="scripts/AWSECommerceServiceLib/Models/VariationAttribute.js"></script>
    <script src="scripts/AWSECommerceServiceLib/Models/VariationAttributes.js"></script>
    <script src="scripts/AWSECommerceServiceLib/Models/RelationshipEnum.js"></script>
    <script src="scripts/AWSECommerceServiceLib/Models/RelatedItem.js"></script>
    <script src="scripts/AWSECommerceServiceLib/Models/RelatedItems.js"></script>
    <script src="scripts/AWSECommerceServiceLib/Models/CollectionSummary.js"></script>
    <script src="scripts/AWSECommerceServiceLib/Models/CollectionParent.js"></script>
    <script src="scripts/AWSECommerceServiceLib/Models/CollectionItem.js"></script>
    <script src="scripts/AWSECommerceServiceLib/Models/Collection.js"></script>
    <script src="scripts/AWSECommerceServiceLib/Models/Collections.js"></script>
    <script src="scripts/AWSECommerceServiceLib/Models/Subjects.js"></script>
    <script src="scripts/AWSECommerceServiceLib/Models/OfferSummary.js"></script>
    <script src="scripts/AWSECommerceServiceLib/Models/Merchant.js"></script>
    <script src="scripts/AWSECommerceServiceLib/Models/OfferAttributes.js"></script>
    <script src="scripts/AWSECommerceServiceLib/Models/AvailabilityAttributes.js"></script>
    <script src="scripts/AWSECommerceServiceLib/Models/OfferListing.js"></script>
    <script src="scripts/AWSECommerceServiceLib/Models/LoyaltyPoints.js"></script>
    <script src="scripts/AWSECommerceServiceLib/Models/Summary.js"></script>
    <script src="scripts/AWSECommerceServiceLib/Models/Promotion.js"></script>
    <script src="scripts/AWSECommerceServiceLib/Models/Promotions.js"></script>
    <script src="scripts/AWSECommerceServiceLib/Models/Offer.js"></script>
    <script src="scripts/AWSECommerceServiceLib/Models/Offers.js"></script>
    <script src="scripts/AWSECommerceServiceLib/Models/RentalListing.js"></script>
    <script src="scripts/AWSECommerceServiceLib/Models/RentalOffer.js"></script>
    <script src="scripts/AWSECommerceServiceLib/Models/RentalOffers.js"></script>
    <script src="scripts/AWSECommerceServiceLib/Models/VariationSummary.js"></script>
    <script src="scripts/AWSECommerceServiceLib/Models/VariationDimensions.js"></script>
    <script src="scripts/AWSECommerceServiceLib/Models/Variations.js"></script>
    <script src="scripts/AWSECommerceServiceLib/Models/CustomerReviews.js"></script>
    <script src="scripts/AWSECommerceServiceLib/Models/EditorialReview.js"></script>
    <script src="scripts/AWSECommerceServiceLib/Models/EditorialReviews.js"></script>
    <script src="scripts/AWSECommerceServiceLib/Models/SimilarProduct.js"></script>
    <script src="scripts/AWSECommerceServiceLib/Models/SimilarProducts.js"></script>
    <script src="scripts/AWSECommerceServiceLib/Models/Accessory.js"></script>
    <script src="scripts/AWSECommerceServiceLib/Models/Accessories.js"></script>
    <script src="scripts/AWSECommerceServiceLib/Models/Track.js"></script>
    <script src="scripts/AWSECommerceServiceLib/Models/Disc.js"></script>
    <script src="scripts/AWSECommerceServiceLib/Models/Tracks.js"></script>
    <script src="scripts/AWSECommerceServiceLib/Models/Property.js"></script>
    <script src="scripts/AWSECommerceServiceLib/Models/Properties.js"></script>
    <script src="scripts/AWSECommerceServiceLib/Models/Children.js"></script>
    <script src="scripts/AWSECommerceServiceLib/Models/Ancestors.js"></script>
    <script src="scripts/AWSECommerceServiceLib/Models/TopSeller.js"></script>
    <script src="scripts/AWSECommerceServiceLib/Models/TopSellers.js"></script>
    <script src="scripts/AWSECommerceServiceLib/Models/NewRelease.js"></script>
    <script src="scripts/AWSECommerceServiceLib/Models/NewReleases.js"></script>
    <script src="scripts/AWSECommerceServiceLib/Models/TopItem.js"></script>
    <script src="scripts/AWSECommerceServiceLib/Models/TopItemSet.js"></script>
    <script src="scripts/AWSECommerceServiceLib/Models/BrowseNode.js"></script>
    <script src="scripts/AWSECommerceServiceLib/Models/BrowseNodes.js"></script>
    <script src="scripts/AWSECommerceServiceLib/Models/AlternateVersion.js"></script>
    <script src="scripts/AWSECommerceServiceLib/Models/AlternateVersions.js"></script>
    <script src="scripts/AWSECommerceServiceLib/Models/Item116.js"></script>
    <script src="scripts/AWSECommerceServiceLib/Models/Items117.js"></script>
    <script src="scripts/AWSECommerceServiceLib/Models/ItemSearchResponse.js"></script>
    <script src="scripts/AWSECommerceServiceLib/Models/ItemLookupResponse.js"></script>
    <script src="scripts/AWSECommerceServiceLib/Models/SimilarityLookupResponse.js"></script>
    <script src="scripts/AWSECommerceServiceLib/Models/KeyValuePair.js"></script>
    <script src="scripts/AWSECommerceServiceLib/Models/MetaData122.js"></script>
    <script src="scripts/AWSECommerceServiceLib/Models/CartItem.js"></script>
    <script src="scripts/AWSECommerceServiceLib/Models/CartItems.js"></script>
    <script src="scripts/AWSECommerceServiceLib/Models/SavedForLaterItems.js"></script>
    <script src="scripts/AWSECommerceServiceLib/Models/SimilarViewedProduct.js"></script>
    <script src="scripts/AWSECommerceServiceLib/Models/SimilarViewedProducts.js"></script>
    <script src="scripts/AWSECommerceServiceLib/Models/OtherCategoriesSimilarProduct.js"></script>
    <script src="scripts/AWSECommerceServiceLib/Models/OtherCategoriesSimilarProducts.js"></script>
    <script src="scripts/AWSECommerceServiceLib/Models/Cart.js"></script>
    <script src="scripts/AWSECommerceServiceLib/Models/CartGetResponse.js"></script>
    <script src="scripts/AWSECommerceServiceLib/Models/CartAddResponse.js"></script>
    <script src="scripts/AWSECommerceServiceLib/Models/CartCreateResponse.js"></script>
    <script src="scripts/AWSECommerceServiceLib/Models/CartModifyResponse.js"></script>
    <script src="scripts/AWSECommerceServiceLib/Models/CartClearResponse.js"></script>
    <script src="scripts/AWSECommerceServiceLib/Models/BrowseNodeLookupResponse.js"></script>
    <script src="scripts/AWSECommerceServiceLib/Models/StringWithUnits.js"></script>
    <script src="scripts/AWSECommerceServiceLib/Models/ItemSearchResponseMsg.js"></script>
    <script src="scripts/AWSECommerceServiceLib/Models/ItemLookupResponseMsg.js"></script>
    <script src="scripts/AWSECommerceServiceLib/Models/BrowseNodeLookupResponseMsg.js"></script>
    <script src="scripts/AWSECommerceServiceLib/Models/SimilarityLookupResponseMsg.js"></script>
    <script src="scripts/AWSECommerceServiceLib/Models/CartGetResponseMsg.js"></script>
    <script src="scripts/AWSECommerceServiceLib/Models/CartAddResponseMsg.js"></script>
    <script src="scripts/AWSECommerceServiceLib/Models/CartCreateResponseMsg.js"></script>
    <script src="scripts/AWSECommerceServiceLib/Models/CartModifyResponseMsg.js"></script>
    <script src="scripts/AWSECommerceServiceLib/Models/CartClearResponseMsg.js"></script>
    <script src="scripts/AWSECommerceServiceLib/Models/ItemSearchRequestMsg.js"></script>
    <script src="scripts/AWSECommerceServiceLib/Models/ItemLookupRequestMsg.js"></script>
    <script src="scripts/AWSECommerceServiceLib/Models/BrowseNodeLookupRequestMsg.js"></script>
    <script src="scripts/AWSECommerceServiceLib/Models/SimilarityLookupRequestMsg.js"></script>
    <script src="scripts/AWSECommerceServiceLib/Models/CartGetRequestMsg.js"></script>
    <script src="scripts/AWSECommerceServiceLib/Models/CartAddRequestMsg.js"></script>
    <script src="scripts/AWSECommerceServiceLib/Models/CartCreateRequestMsg.js"></script>
    <script src="scripts/AWSECommerceServiceLib/Models/CartModifyRequestMsg.js"></script>
    <script src="scripts/AWSECommerceServiceLib/Models/CartClearRequestMsg.js"></script>

    ...
</head>
```
> The `Module.js` file should be imported before the other files. After `Module.js`, `Configuration.js` should be imported.
> The `ModelFactory.js` file is needed by `ObjectMapper.js` file. The `ObjectMapper` in turn, is needed by `BaseController.js`.

### 7. Including link to `app.js` in HTML file
Link your `app.js` file to your `index.html` file like:
```html
<head>
	...
	<script src="scripts/app.js"></script>
</head>
```
> The link to app.js needs to be included at the very end of the head tag, after the SDK references have been added

### 8. Initializing the Angular App
You need to initialize your app and the controller associated with your view inside your `index.html` file. Do so like:
+ Add ng-app directive to initialize your app inside the `body` tag.
```html
<body ng-app="myApp">
```
+ Add ng-controller directive to initialize your controller and bind it with your view (`index.html` file).
```html
...
<body ng-app="myApp">
	<div ng-controller="testController">
		...
	</div>
	...
</body>
...
```

### 9. Consuming the SDK 
In order to use the generated SDK's modules, controllers and factories, the project needs to be added as a dependency in your angular app's module. This will be done inside the `app.js` file.
Add the dependency like this:

```js
var app = angular.module('myApp', ['AWSECommerceServiceLib']);
```
At this point, the SDK has been successfully included in your project. Further steps include using a service/factory from the generated SDK. To see working example of this, please head on [over here](#list-of-controllers) and choose any class to see its functions and example usage.  

### 10. Running The App
To run the app, simply open up the `index.html` file in a browser.

![app-running](https://apidocs.io/illustration/angularjs?step=appRunning)

## Initialization


The Angular Application can be initialized as following:
```JavaScript
var app = angular.module('myApp', [AWSECommerceServiceLib]);
// now controllers/services can be created which import
// the factories provided by the sdk
```
### 




# Class Reference

## <a name="list_of_controllers"></a>List of Controllers

* [AWSECommerceServiceBindingController](#awse_commerce_service_binding_controller)

## <a name="awse_commerce_service_binding_controller"></a>![Class: ](https://apidocs.io/img/class.png ".AWSECommerceServiceBindingController") AWSECommerceServiceBindingController

### Get singleton instance

The singleton instance of the ``` AWSECommerceServiceBindingController ``` class can be accessed via Dependency Injection.

```js
	app.controller("testController", function($scope, AWSECommerceServiceBindingController, ItemSearchResponseMsg, ItemLookupResponseMsg, BrowseNodeLookupResponseMsg, SimilarityLookupResponseMsg, CartGetResponseMsg, CartAddResponseMsg, CartCreateResponseMsg, CartModifyResponseMsg, CartClearResponseMsg){
	});
```

### <a name="create_item_search_post11"></a>![Method: ](https://apidocs.io/img/method.png ".AWSECommerceServiceBindingController.createItemSearchPost11") createItemSearchPost11

> *Tags:*  ``` Skips Authentication ``` 

> ItemSearch90


```javascript
function createItemSearchPost11(body)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| body |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript


	app.controller("testController", function($scope, AWSECommerceServiceBindingController, ItemSearchResponseMsg){
        var body = new ItemSearchRequestMsg({"key":"value"});


		var result = AWSECommerceServiceBindingController.createItemSearchPost11(body);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



### <a name="create_item_lookup_post11"></a>![Method: ](https://apidocs.io/img/method.png ".AWSECommerceServiceBindingController.createItemLookupPost11") createItemLookupPost11

> *Tags:*  ``` Skips Authentication ``` 

> ItemLookup91


```javascript
function createItemLookupPost11(body)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| body |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript


	app.controller("testController", function($scope, AWSECommerceServiceBindingController, ItemLookupResponseMsg){
        var body = new ItemLookupRequestMsg({"key":"value"});


		var result = AWSECommerceServiceBindingController.createItemLookupPost11(body);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



### <a name="create_browse_node_lookup_post11"></a>![Method: ](https://apidocs.io/img/method.png ".AWSECommerceServiceBindingController.createBrowseNodeLookupPost11") createBrowseNodeLookupPost11

> *Tags:*  ``` Skips Authentication ``` 

> BrowseNodeLookup92


```javascript
function createBrowseNodeLookupPost11(body)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| body |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript


	app.controller("testController", function($scope, AWSECommerceServiceBindingController, BrowseNodeLookupResponseMsg){
        var body = new BrowseNodeLookupRequestMsg({"key":"value"});


		var result = AWSECommerceServiceBindingController.createBrowseNodeLookupPost11(body);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



### <a name="create_similarity_lookup_post11"></a>![Method: ](https://apidocs.io/img/method.png ".AWSECommerceServiceBindingController.createSimilarityLookupPost11") createSimilarityLookupPost11

> *Tags:*  ``` Skips Authentication ``` 

> SimilarityLookup93


```javascript
function createSimilarityLookupPost11(body)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| body |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript


	app.controller("testController", function($scope, AWSECommerceServiceBindingController, SimilarityLookupResponseMsg){
        var body = new SimilarityLookupRequestMsg({"key":"value"});


		var result = AWSECommerceServiceBindingController.createSimilarityLookupPost11(body);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



### <a name="create_cart_get_post11"></a>![Method: ](https://apidocs.io/img/method.png ".AWSECommerceServiceBindingController.createCartGetPost11") createCartGetPost11

> *Tags:*  ``` Skips Authentication ``` 

> CartGet94


```javascript
function createCartGetPost11(body)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| body |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript


	app.controller("testController", function($scope, AWSECommerceServiceBindingController, CartGetResponseMsg){
        var body = new CartGetRequestMsg({"key":"value"});


		var result = AWSECommerceServiceBindingController.createCartGetPost11(body);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



### <a name="create_cart_add_post11"></a>![Method: ](https://apidocs.io/img/method.png ".AWSECommerceServiceBindingController.createCartAddPost11") createCartAddPost11

> *Tags:*  ``` Skips Authentication ``` 

> CartAdd95


```javascript
function createCartAddPost11(body)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| body |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript


	app.controller("testController", function($scope, AWSECommerceServiceBindingController, CartAddResponseMsg){
        var body = new CartAddRequestMsg({"key":"value"});


		var result = AWSECommerceServiceBindingController.createCartAddPost11(body);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



### <a name="create_cart_create_post11"></a>![Method: ](https://apidocs.io/img/method.png ".AWSECommerceServiceBindingController.createCartCreatePost11") createCartCreatePost11

> *Tags:*  ``` Skips Authentication ``` 

> CartCreate96


```javascript
function createCartCreatePost11(body)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| body |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript


	app.controller("testController", function($scope, AWSECommerceServiceBindingController, CartCreateResponseMsg){
        var body = new CartCreateRequestMsg({"key":"value"});


		var result = AWSECommerceServiceBindingController.createCartCreatePost11(body);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



### <a name="create_cart_modify_post11"></a>![Method: ](https://apidocs.io/img/method.png ".AWSECommerceServiceBindingController.createCartModifyPost11") createCartModifyPost11

> *Tags:*  ``` Skips Authentication ``` 

> CartModify97


```javascript
function createCartModifyPost11(body)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| body |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript


	app.controller("testController", function($scope, AWSECommerceServiceBindingController, CartModifyResponseMsg){
        var body = new CartModifyRequestMsg({"key":"value"});


		var result = AWSECommerceServiceBindingController.createCartModifyPost11(body);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



### <a name="create_cart_clear_post11"></a>![Method: ](https://apidocs.io/img/method.png ".AWSECommerceServiceBindingController.createCartClearPost11") createCartClearPost11

> *Tags:*  ``` Skips Authentication ``` 

> CartClear98


```javascript
function createCartClearPost11(body)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| body |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript


	app.controller("testController", function($scope, AWSECommerceServiceBindingController, CartClearResponseMsg){
        var body = new CartClearRequestMsg({"key":"value"});


		var result = AWSECommerceServiceBindingController.createCartClearPost11(body);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



[Back to List of Controllers](#list_of_controllers)



