import 'package:flutter/material.dart';
class BottomAppBarDemo extends StatefulWidget {
  _BottomAppBarDemoState createState() => _BottomAppBarDemoState();
}

class _BottomAppBarDemoState extends State<BottomAppBarDemo> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      floatingActionButton: FloatingActionButton(
        onPressed: (){

        },
        tooltip: 'increment',
        child: Icon(
          Icons.add,
          color: Colors.red
        )
      ),
      bottomNavigationBar: BottomAppBar(
        
      )
    );
  }
}