angular.module('posts', ['ngResource']).
  factory('Post', function($resource) {
  var Post = $resource('/posts/:id', {id: '@id'},
                       {
                         update: { method: 'PUT' },
                         destroy: { method: 'DELETE'}
                       }
                      );

  Post.prototype.destroy = function(cb) {
    return Post.remove({id: this.id}, cb);
  };

  return Post;
});

var myApp = angular.module('angapp', []);
      
angapp.directive('MyDatepicker', function ($parse) {
    return function (scope, element, attrs, controller) {
      console.info("DATEPICKER")
        var ngModel = $parse(attrs.ngModel);
        $(function(){
            element.datepicker({
                showOn:"both",
                changeYear:true,
                changeMonth:true,
                dateFormat:'yy-mm-dd',
                maxDate: new Date(),
                yearRange: '2012:2014',
                onSelect:function (dateText, inst) {
                    scope.$apply(function(scope){
                        // Change binded variable
                        ngModel.assign(scope, dateText);
                    });
                }
            });
        });
    }
});