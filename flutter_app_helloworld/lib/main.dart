import 'package:flutter/material.dart';
void main () => runApp(MyApp());
class MyApp extends StatelessWidget{
  @override
  Widget build(BuildContext context ){
      var stack = new Stack(
        alignment: const FractionalOffset(0.5, 0.8),
        children: <Widget>[
          new CircleAvatar(
              backgroundImage: new NetworkImage('http://jspang.com/static//myimg/blogtouxiang.jpg'),
              radius: 100.0,
          ),
          new Positioned(
            top: 10.0,
            left: 10.0,
            child: Text('yqf go go go'),
          ),
          new Positioned(
            top: 10.0,
            right: 10.0,
            child: Text('技术'),
          )
        ],
      );


      return MaterialApp(
        title:'ListView widget',
        home:Scaffold(
          appBar: new AppBar(
            title: new Text('垂直方向布局'),
          ),
          body:Center(
            child: stack,
          )
        ),
      );
  }
}