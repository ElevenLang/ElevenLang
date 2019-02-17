import 'package:flutter/material.dart';
import 'bottom_navigation_widget.dart';

void main() => runApp(new MyWidget());

class MyWidget extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'demo01',
      theme: ThemeData.light(),
      home: BottomNavigationWidget(),
    );
  }
}