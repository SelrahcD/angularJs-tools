# AngularJs Alerts
This module handles alerts for [AngularJs](http://angularjs.org/) and is based on [Twitter Bootstrap](http://twitter.github.io/bootstrap/).

## How to make this work
* You need to include the 4 javascripts files
* Add this in your template

```html
<div class="alerts row-fluid" ng-controller="AlertsController">
    <alert ng-repeat="alert in alerts" type="alert.type" close-btn time="alert.time" close="close($index)" ng-cloak>
        {{ alert.text }}
    </alert>
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

Each alert will desapear after 3 seconds. You can override this behaviour if you provide a value in ms as the second argument of alert method.
```javascript
AlertsService.success('Sucess message', 5000);
```
Will make the alert disapear after 5s.

If you want to disbale the timeout mechanism pass 0 as duration.

## Anything wrong
Pull requests are welcome [in the repo](https://github.com/SelrahcD/angularJs-tools).