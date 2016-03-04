(function() {
  'use strict';

  angular
    .module('kelley')
    .controller('ModalController', ModalController)
    .controller('NavController', NavController)

    .controller('MainController', MainController)
    .controller('MlsController', MlsController)
    .controller('SellerController', SellerController)
    .controller('BuyerController', BuyerController)
    .controller('BackgroundController', BackgroundController)
    .controller('TestimonialsController', TestimonialsController)

  /** @ngInject */
  var last = "";
  function ModalController($timeout){
      $(document).ready(function(){
        $('.cModal').hide();
      })
  }

  function NavController($scope){
    $scope.test = function(event){
      $(this).parent().addClass('active');
    }
  }

  function MlsController($scope){
    $(last).removeClass('active');
    $("#mlsli").addClass('active');
    last = '#mlsli';
  }
  function SellerController(){
    $(last).removeClass('active');
    $("#sellerli").addClass('active');
    last = '#sellerli';
  }
  function BuyerController(){
    $(last).removeClass('active');
    $("#buyerli").addClass('active');
    last = '#buyerli';
  }
  function BackgroundController(){
    $(last).removeClass('active');
    $("#backgroundli").addClass('active');
    last = '#backgroundli';
  }
  function TestimonialsController(){
    $(last).removeClass('active');
    $("#testili").addClass('active');
    last = '#testili';
  }
  function MainController($timeout, webDevTec, toastr) {
    $(last).removeClass('active');
    $("#featuredli").addClass('active');
    last = '#featuredli';

    $('.cccontact').click(function(){
      console.log('wat');
      $('.cModal').fadeIn('slow');
      console.log('waddt');
      return false;
    });
    $('#sendemail').on('click', function(){
      $('.cModal').fadeOut('slow');
    });


    var vm = this;

    vm.awesomeThings = [];
    vm.classAnimation = '';
    vm.creationDate = 1454045539508;
    vm.showToastr = showToastr;

    activate();

    function activate() {
      getWebDevTec();
      $timeout(function() {
        vm.classAnimation = 'rubberBand';
      }, 4000);
    }

    function showToastr() {
      toastr.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>');
      vm.classAnimation = '';
    }

    function getWebDevTec() {
      vm.awesomeThings = webDevTec.getTec();

      angular.forEach(vm.awesomeThings, function(awesomeThing) {
        awesomeThing.rank = Math.random();
      });
    }

      angular.element(document).ready(function(){
        angular.element('.slider-for').slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          fade: true,
          arrows:true,
          autoplay: true,
          dots:true,
          autoplaySpeed: 6000
        });
      });

  }
})();
