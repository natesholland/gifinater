let Handlebars = require('handlebars');

(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['image.hbs'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<br><img src=\""
    + alias4(((helper = (helper = helpers.url || (depth0 != null ? depth0.url : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"url","hash":{},"data":data}) : helper)))
    + "\"><br> "
    + alias4(((helper = (helper = helpers.url || (depth0 != null ? depth0.url : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"url","hash":{},"data":data}) : helper)))
    + "\n<span class=\"glyphicon glyphicon-copy\" onclick=copyUrlClipboard("
    + alias4(((helper = (helper = helpers.url || (depth0 != null ? depth0.url : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"url","hash":{},"data":data}) : helper)))
    + ")></span><br>\n";
},"useData":true});
templates['strong.hbs'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<strong>"
    + container.escapeExpression(((helper = (helper = helpers.strong || (depth0 != null ? depth0.strong : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"strong","hash":{},"data":data}) : helper)))
    + "</strong>\n";
},"useData":true});
})();
