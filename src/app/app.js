angular.module('invertedIndexApp', [])
    .controller('BookController', ['$scope', ($scope) => {
      $scope.bookList = [];

      $scope.validateBooks = (bookFile) => {
        let status = false;
        const books = Array.from(bookFile.target.files);
        $scope.badBooks = [];
        books.forEach((book) => {
          $scope.$apply(() => {
            if (book.type === 'application/json') {
              $scope.bookList.push(book);
              console.log('validated');
              status = true;
            } else {
              $scope.badBooks.push(book.name);
              console.log('not validated');
            }
          });
        });
        console.log($scope.bookList.length);
        return status;
      };

      // $scope.buildIndex = (file) => {
      // 	const fr = new FileReader();
      // 	fr.onload() => {

      // 	}
      // }
      document.getElementById('bookFile')
            .addEventListener('change', $scope.validateBooks);
    }]);
