# AngularJs Alerts
This module handles alerts for [AngularJs](http://angularjs.org/) and is based on [Twitter Bootstrap](http://twitter.github.io/bootstrap/).

## How to make this work
* You need to include the 3 javascripts files
* Add this in your template

```html
 <div class="alerts" ng-controller="AlertsController">
     <ul>
         <li ng-repeat="alert in alerts" class="alert {{ alert.type }}" ng-cloak>
             <button type="button" class="close" data-dismiss="alert">&times;</button>   
             {{ alert.text }} 
         </li>
     </ul>
 </div>
```
* Set it as a depency of each module you would like to use it
* Inject it in your controllers. This is it

You can now create an alert in your application using one of the following 
```javascript
AlertsService.success('Sucess message');
AlertsService.error('Error message');
AlertsService.info('Information message');
```

## Anything wrong
Pull requests are welcome [in the repo](https://github.com/SelrahcD/angularJs-tools).