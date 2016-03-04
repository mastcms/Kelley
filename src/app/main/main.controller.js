(function() {
  'use strict';

  angular
    .module('kelley')
    .controller('ModalController', ModalController)
    .controller('MainController', MainController);

  /** @ngInject */
  function ModalController($timeout, webDevTec, toastr){
      $(document).ready(function(){
        $('.cModal').hide();
      })
  }

  function MainController($timeout, webDevTec, toastr) {
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
