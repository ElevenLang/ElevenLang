import 'package:flutter/material.dart';
import './each_view.dart';

class BottomAppBarDemo extends StatefulWidget {
  _BottomAppBarDemoState createState() => _BottomAppBarDemoState();
}

class _BottomAppBarDemoState extends State<BottomAppBarDemo> {
  List<Widget> _eachView;  //创建视图数组
  int _index = 0;          //数组索引，通过改变索引值改变视图

  @override
  void initState() {
      // TODO: implement initState
      super.initState();
      _eachView = List();
      _eachView
      ..add(EachView('Home123'))
      ..add(EachView('Me'));
    }


  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body:_eachView[_index],
      floatingActionButton: FloatingActionButton(
        onPressed:(){
          Navigator.of(context).push(MaterialPageRoute(builder:(BuildContext context){
            return EachView('New Pageddd');
          }));
        },
        tooltip: 'increase',
        child: Icon(
          Icons.add,
          color: Colors.limeAccent
        ),
      ),
      floatingActionButtonLocation: FloatingActionButtonLocation.centerDocked,
      bottomNavigationBar: BottomAppBar(
        color: Colors.lightBlue,
        shape: CircularNotchedRectangle(),
        child: Row(
          mainAxisSize: MainAxisSize.max,
          mainAxisAlignment: MainAxisAlignment.spaceAround,
          children: [
            IconButton(
              icon:Icon(Icons.home),
              color:Colors.white,
              onPressed:(){
                setState(() {
                    _index=0;             
                  });
              }
            ),
            IconButton(
              icon:Icon(Icons.airport_shuttle),
              color:Colors.white,
              onPressed:(){
                setState(() {
                    _index=1;             
                  });
              }
            )
          ]
        ),
      ),
    );
  }
}