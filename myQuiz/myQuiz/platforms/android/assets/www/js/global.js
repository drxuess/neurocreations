/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function isOnline(){
    var isOffline = 'onLine' in navigator && !navigator.onLine;
    
    if ( isOffline ) {
        return false;
    }
    else {
        return true;
    }
}