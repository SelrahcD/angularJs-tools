# Filtered Table
This [AngularJs](http://angularjs.org/) module is an helper for filtered tables.

## How to make this work
* Include the .js file
* Set it as a depency of each module you would like to use it (module name : filteredTable)
* Add functionality to your tables adding filtered-table attribute
* Add "orderBy:predicate:reverse" filter to your ng-repeat directive
* Use "orderBy('fieldName')" function to order by fieldName attribute
* Specify custom CSS classes  using ng-class directive (see below for an example)
* You're good to go !

## Example

```html
<table filtered-table>
    <tr>
        <th ng-class="{sorting: predicate != 'priority', sorting_asc: sorting['priority'] == 'asc', sorting_desc: sorting['priority'] == 'desc'}" ng-click="orderBy('priority');">Priority</th>
        <th ng-class="{sorting: predicate != 'name', sorting_asc: sorting['name'] == 'asc', sorting_desc: sorting['name'] == 'desc'}" ng-click="orderBy('name');">Name</th>
    </tr>
    <tr ng-repeat="issue in issues | orderBy:predicate:reverse">
        <td>{{ issue.priority }}</td>
        <td>{{ issue.name }}</td>
    </tr>
</table>
```

