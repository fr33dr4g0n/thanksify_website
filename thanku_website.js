Router.route('/', function() {
  this.render('index');
    window.optimizely = window.optimizely || [];
    window.optimizely.push(["activate"]);
});
Router.route('/buynow', function() {
    this.render('buynow');
});
Router.route('/mobileapp', function() {
    this.render('mobileapp');
});

Router.route('/contact', function() {
  this.render('contact');
});
Router.route('/privacy', function() {
  this.render('privacy');
});

Router.route('refund', function() {
   this.render('refund');
});

Router.route('terms', function() {
   this.render('termsofuse');
});
Router.route('/sharing', function() {
    this.render('sharing');
});

if (Meteor.isClient) {
    window.optimizely = window.optimizely || [];
    window.optimizely.push(["activate"]);

}

if (Meteor.isServer) {

}

Meteor.startup(function() {
    if(Meteor.isClient){
        return SEO.config({
            auto: {
                twitter: true,
                og: true
            },
            og: {
                'title': 'Simple way to make someone feel appreciated with Thanksify.',
                'image': '/Logo-Final.png',
                'url': 'http://thanksify.com',
                'description': 'Make someone feel special by sending them a thank you card',
                'site_name': 'Thanksify'
            },
            title: 'Simple way to make someone feel appreciated.',
            meta: {
                'description': 'Make someone feel special by sending them a thank you card - Thanksify'
            }
        });
    }
});

