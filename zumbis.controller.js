angular.module('app').controller('zumbisCtrl', function($scope, $rootScope) {
    $rootScope.$on('cep', function(event, data) {
        $scope.ocorrencia.bairro = data.bairro;
        $scope.ocorrencia.logradouro = data.logradouro;
        $scope.ocorrencia.cidade = data.cidade;
        $scope.ocorrencia.estado = data.estado;
    });

    $scope.ocorrencias = [];

    $scope.adiciona = function(ocorrencia) {
        //adiciona e concatena na tabela
        $scope.ocorrencias.push(angular.copy(ocorrencia));
        //limpa os campos de ocorrencia para nova entrada
        $scope.ocorrencia = null;
    };
});
