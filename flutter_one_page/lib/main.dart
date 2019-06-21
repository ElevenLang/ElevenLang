import 'package:flutter/material.dart';
import 'dataSource/data.dart';
void main() => runApp(MyApp());



var _avator = Center(
  child: Image.asset('assets/images/avator.png'),
);

var _info = Padding(
  padding: EdgeInsets.only(top: 30.0),
  child: Column(
    crossAxisAlignment: CrossAxisAlignment.center,
    children: <Widget>[
      _avator,
      SizedBox(height: 20.0),
      Text(
        'Daniel Luis',
        style: TextStyle(
            fontWeight: FontWeight.bold,
            color: Color(0xff372c2a),
            fontSize: 24.0),
      ),
      SizedBox(height: 10.0),
      Text(
        'Tel Aviv',
        style: TextStyle(color: Color(0xff8c7e7c), fontSize: 16.0),
      ),
      SizedBox(height: 10.0),
      Text(
        'Specialities:',
        style: TextStyle(
            color: Color(0xffe7604a),
            fontSize: 18.0,
            fontWeight: FontWeight.bold),
      ),
      SizedBox(height: 10.0),
      Padding(
        padding: EdgeInsets.fromLTRB(30, 10, 30, 20),
        child: Text(
          'Vegetarian dishes and oriental-style cooking',
          style: TextStyle(color: Color(0xff372c2a), fontSize: 16.0,),
          textAlign: TextAlign.center,
        ),
      ),
    ],
  ),
);

var _bar = AppBar(
  title: Text(
    'Cook Profile',
    style: TextStyle(
      fontSize: 24.0,
    ),
  ),
  backgroundColor: Color.fromRGBO(237, 106, 84, 1),
  centerTitle: true,
  leading: IconButton(
    icon: Icon(
      Icons.arrow_back,
//                size: Siz,
    ),
    onPressed: () {},
  ),
);

var _favourits = Container(
  margin: EdgeInsets.only(top: 20, left: 20.0, right: 20.0, bottom: 20.0),
//  margin: EdgeInsets.all(40.0),
  decoration: BoxDecoration(
    border: Border(
      top: BorderSide(
        color: Color(0xffbe0636),
        width: 1.0
      ),
      bottom: BorderSide(
          color: Color(0xffbe0636),
          width: 1.0
      )

    )
  ),
  child: Row(
    children: fav_icons.map((item) {
      var index = fav_icons.indexOf(item);
      return
        Expanded(
          child: Container(
            decoration: BoxDecoration(
                border: index != 2 ? Border(right: BorderSide(color: Color(0xffeadcda), width: 1.0)): Border()
            ),
            padding: EdgeInsets.only(top: 20.0, bottom: 20.0),
            child: Column(
              children: <Widget>[
                Row(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: <Widget>[
                    Image.asset('${item['img']}', width: 20.0,),
                    SizedBox(width: 5.0),
                    Text('${item['num']}', style: TextStyle(color: Color(0xff372c2a), fontSize: 20.0),)
                  ],
                ),
                Text('${item['text']}')
              ],
            ),
          ),
        );
    }).toList()
  ),
);


var _btnGroup = Container(
  margin: EdgeInsets.only(top: 20, left: 20.0, right: 20.0, bottom: 20.0),
  height: 55.0,
  decoration: BoxDecoration(
    border: Border.all(
      color: Color(0xffeadcda),
      width: 1.0
    )
  ),
  child: Row(
    mainAxisAlignment: MainAxisAlignment.center,
    children: <Widget>[
      Expanded(
        child: Container(
          decoration: BoxDecoration(
            border: Border(right: BorderSide(color: Color(0xffeadcda), width: 1.0))
          ),
          child: Center(
          child: Text('Send message', style: TextStyle(color: Color(0xffe7604a), fontSize: 20.0)),
        ),
        ),
      ),
      Divider(),
      Expanded(
        child: Center(
          child:Text('Follow', style: TextStyle(color: Color(0xff4271e8), fontSize: 20.0))
          ),
      )
    ],
  ),
);


var _about = Container(
  padding: EdgeInsets.only(top: 20, left: 20.0, right: 20.0, bottom: 20.0),
  width: double.infinity,
  decoration: BoxDecoration(
    color: Color(0xffffffff),
  ),
  child: Column(
    children: <Widget>[
      Text(
        'About Me', 
        style: TextStyle(color: Color(0xff372c2a), fontSize: 20.0, fontWeight: FontWeight.bold),
      ),
      SizedBox(
        height: 20.0,
      ),
      // SizedBox(
      //   height: 50.0,
      //   child: Text('$about_text', 
      //   style: TextStyle(
      //     color: Color(0xff372c2a), height: 1.5,
      //     decoration: TextDecoration.underline
      //   ), 
      //   textAlign: TextAlign.center,
      //   overflow: TextOverflow.ellipsis,
      //   maxLines: 2,
      // ),
      // ),
      Text('$about_text', 
        style: TextStyle(color: Color(0xff372c2a), height: 1.5), 
        textAlign: TextAlign.center,
      )
    ],
  ),
);
class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'my first page demo',
      home: Scaffold(
          appBar: PreferredSize(
            preferredSize: Size.fromHeight(50.0),
            child: _bar,
          ),
          body: Container(
            decoration: BoxDecoration(
              color: Color(0xfff1eeed),
            ),
            child: ListView(
              padding: EdgeInsets.only(top: 40.0),
              children: <Widget>[
                _info,
                _favourits,
                _btnGroup,
                _about
              ],
            ),
          )),
    );
  }
}


