///<reference path="../lib/angular.d.ts"/>
///<reference path="../classes/User.ts"/>
///<reference path="../lib/angular-resource-d.ts"/>
///<reference path="../app/app.ts"/>
///<reference path="../lib/restangular.d.ts"/>
///<reference path="../lib/lodash.d.ts"/>
var FormulaireSkwarel;
(function (FormulaireSkwarel) {
    class UserController {
        //httpService: ng.IHttpService;
        // myScope : ScopeCustom;
        constructor($scope, $http, restangular) {
            this.$scope = $scope;
            this.$http = $http;
            this.restangular = restangular;
            this.$scope.ok = false;
        }
        submitUser() {
            this.$scope.okUpdate = false;
            this.$scope.ok = true;
            var data = this.$scope;
            this.user = new User(data.nomUser, data.prenomUser, data.genreUser, data.dateNaissanceUser, data.mailUser);
            console.log(this.user);
            this.$scope.okNom = this.user.getNom;
            this.$scope.okPrenom = this.user.getPrenom;
            this.$scope.okGenre = this.user.getGenre;
            this.$scope.okMail = this.user.getMail;
            this.$scope.okDate = this.user.getDateNaissance;
            //this.$http.post("/userCtrl/addUser", this.user);
            this.restangular.all('userCtrl/addUser').post(this.user).then(function () {
                console.log("User ajouté");
            });
        }
        getListUsers() {
            let self = this;
            this.restangular.all('userCtrl/getListUsers').get('').then(function (response) {
                self.$scope.collectionClient = response.plain();
                console.log(response);
            });
            //this.$scope.collectionClient = liste.customGETLIST();
            //this.$scope.collectionClient = this.$http.get('userCtrl/getListUsers').success(function(){console.log('Done')});
        }
        updateUser(id, mail) {
            console.log('Updating...');
            console.log(mail);
            this.$scope.ok = false;
            this.$scope.okUpdate = true;
            this.$scope.updateEmail = mail;
            let self = this;
            /*        this.restangular.one('userCtrl/updateUser:id/newInfo',id).put(mail).then(function () {
                        var data:string = self.$scope.newMail;
                        self.$scope.updateEmail = (data);*
                    });*/
            this.restangular.one('userCtrl/updateUser', id).one('newInfo', mail).put();
            /*			var UserUpdate = $resource("/userCtrl/updateUser/:id/newInfo/:newMail",{id:'@id' ,newMail:'@newMail'},null);
             var userUpdate = UserUpdate.save({id:id,newMail:newMail});
             var userToUpdate = this.restangular.one('userCtrl',)
             console.log('Update done');
             console.log(this.user.getEmail);*/
        }
        deleteUsers() {
            this.restangular.all('userCtrl/deleteUsers').remove();
        }
        deleteOne(id) {
            /*			 /!*			var User  = $resource('/userCtrl/deleteUser/:id',{id:id});
             var user = User.remove(function(){console.log('User destroyed')});*!/
    
    
             }*!/*/
            this.restangular.one('userCtrl/deleteUser', id).remove().then(function () {
                console.log("User deleted");
            });
        }
    }
    /*static $inject = ['$scope','$http'];*/
    //static $inject = ['$scope','$http', 'Restangular'];
    UserController.$inject = ['$scope', '$http', 'Restangular'];
    FormulaireSkwarel.UserController = UserController;
})(FormulaireSkwarel || (FormulaireSkwarel = {}));
//# sourceMappingURL=UserController.js.map