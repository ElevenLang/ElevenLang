import 'package:flutter/material.dart';
import 'bottom_navigation_widget.dart';
import 'bottom_appBar_demo.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter demo',
      theme: ThemeData(
        primarySwatch: Colors.lightBlue
      ),
      home:BottomAppBarDemo()
    );
  }
}