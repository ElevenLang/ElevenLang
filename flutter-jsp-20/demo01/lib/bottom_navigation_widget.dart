import 'package:flutter/material.dart';
import './pages/airplay_screen.dart';
import './pages//email_screen.dart';
import './pages//home_screen.dart';
import './pages/pages_screen.dart';

class BottomNavigationWidget extends StatefulWidget {
  _BottomNavigationWidgetState createState() => _BottomNavigationWidgetState();
}

class _BottomNavigationWidgetState extends State<BottomNavigationWidget> {
  final _color = Colors.blue;
  int _currentIndex = 0;
  List<Widget> list = List();

  @override
  void initState(){
    list
    ..add(HomeScreen())
    ..add(EmailScreen())
    ..add(PagesScreen())
    ..add(AirplayScreen());
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: list[_currentIndex],
      bottomNavigationBar: BottomNavigationBar(
        items: [
          BottomNavigationBarItem(
            icon: Icon(
              Icons.home,
              color: _color
            ),
            title: Text(
              'Home',
              style: TextStyle(color: _color)
            )
          ),
          BottomNavigationBarItem(
            icon: Icon(
              Icons.email,
              color: _color
            ),
            title: Text(
              'Email',
              style: TextStyle(color: _color)
            )
          ),
          BottomNavigationBarItem(
            icon: Icon(
              Icons.pages,
              color: _color
            ),
            title: Text(
              'Pages',
              style: TextStyle(color: _color)
            )
          ),
          BottomNavigationBarItem(
            icon: Icon(
              Icons.airplay,
              color: _color
            ),
            title: Text(
              'Airplay',
              style: TextStyle(color: _color)
            )
          )
        ],
        currentIndex: _currentIndex,
        onTap: (int index){
          setState(() {
            _currentIndex = index; 
          });
        },
        type: BottomNavigationBarType.fixed,
      ),
    );
  }
}