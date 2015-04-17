/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

function Login(){
    $(".errorMessage").fadeOut();
    var ip = "http://192.168.1.109/login.php";
    var name = $("[name='username']").val();
    var pass = $("[name='password']").val();
    var val = 0;
    var httpReq = new plugin.HttpRequest();
    if(isOnline()){
        console.log("Online");
        httpReq.post(ip, {
            username: name,
            password: pass
        },function(err, data){
            if(data === true){
                val = 2;
            }
            console.log(err + " " + data);
        });
    }else{
        console.log("Offline");
        var username = "z9999999";
        var password = "password2015";
        if (name === username) {
            val += 1;
        }
        if (pass === password) {
            val += 1;
        }
    }
    if (val === 2) {
        window.location.replace("dashboard.html");
    }
    else {
        $(".errorMessage").fadeIn();
    }
}

var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        console.log('Received Event: ' + id);
    }
};

app.initialize();