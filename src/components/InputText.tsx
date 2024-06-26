import React, {useState} from 'react';
import {TextInput, Button, Alert, View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {TouchableOpacity} from 'react-native-gesture-handler';

interface InputTextProps {
  onchageText: (value: any, key: string) => void;
  name?: string;
  IconName?: string;
  Type?: string;
  color?: string;
  value?: any;
  maxLength?: number;
}
export const InputText = ({
  onchageText,
  name,
  IconName,
  Type,
  color = '#364989',
  value,
  maxLength = 1000,
}: InputTextProps) => {
  const [text, setText] = useState(value);
  const [Password, setPassword] = useState(true);

  const handleTextChange = newText => {
    setText(newText);
    onchageText(newText);
  };
  const handlePassword = () => {
    setPassword(!Password);
  };

  return (
    <>
      <View style={style.container}>
        <View style={{...style.input, borderBottomColor: color,}}>
          <Icon
            name={
              Type === 'Email'
                ? 'mail-outline'
                : Type === 'Password'
                ? 'lock-closed-outline'
                : IconName
            }
            size={30}
            color={color}
          />
          <TextInput
            style={{
              height: 40,
              width: `${Type === 'Password' ? '75%' : '87%'}`,
              color: '#333',
            }}
            maxLength={maxLength}
            onChangeText={handleTextChange}
            value={text}
            placeholder={name}
            placeholderTextColor="#000"
            secureTextEntry={Type === 'Password' ? Password : false}
          />
         {Type == 'Password' &&  <TouchableOpacity onPress={() => handlePassword()}>
            <Icon name={Password ? 'eye-off' : 'eye'} size={30} color={color} />
          </TouchableOpacity>}
        </View>
      </View>
    </>
  );
};

const style = StyleSheet.create({
  container: {
    alignItems: 'center',
    // backgroundColor: 'red',
  },
  input: {
    width: '90%',
    flexDirection: 'row',
    // backgroundColor: 'white',
    borderWidth: 1,
    borderTopColor: 'transparent',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

// import React, {useState} from 'react';
// import {TextInput, Button, Alert, View, StyleSheet} from 'react-native';
// import Icon from 'react-native-vector-icons/Ionicons';
// import {TouchableOpacity} from 'react-native-gesture-handler';

// interface InputTextProps {
//   onchageText: (value: any, key: string) => void;
//   name?: string;
//   IconName?: string;
//   Type?: string;
//   color?: string;
//   value?: any;
// }
// export const InputText = ({
//   onchageText,
//   name,
//   IconName,
//   Type,
//   color = '#364989',
//   value,
// }: InputTextProps) => {
//   const [text, setText] = useState(value);
//   const [Password, setPassword] = useState(true);

//   const handleTextChange = newText => {
//     setText(newText);
//     onchageText(newText);
//   };
//   const handlePassword = () => {
//     setPassword(!Password);
//   };

//   return (
//     <>
//       <View style={style.container}>
//         {Type === 'Email' ? (
//           <View style={style.input}>
//             <Icon name="mail-outline" size={30} color={color} />
//             <TextInput
//               style={{
//                 height: 40,
//                 width: '87%',
//                 color: '#333'
//               }}
//               onChangeText={handleTextChange}
//               keyboardType="email-address"
//               value={text}
//               placeholder={name}
//               placeholderTextColor="#000"
//             />
//           </View>
//         ) : Type === 'Password' ? (
//           <View style={style.input}>
//             <Icon name="lock-closed-outline" size={30} color={color} />
//             <TextInput
//               style={{
//                 height: 40,
//                 width: '75%',
//                 color: '#333'
//               }}
//               onChangeText={handleTextChange}
//               value={text}
//               placeholder={name}
//               placeholderTextColor="#000"
//               secureTextEntry={Password}
//             />
//             <TouchableOpacity onPress={() => handlePassword()}>
//               <Icon
//                 name={Password ? 'eye-off' : 'eye'}
//                 size={30}
//                 color={color}
//               />
//             </TouchableOpacity>
//           </View>
//         ) : (
//           <View style={style.input}>
//           <Icon name={IconName} size={30} color={color} />
//           <TextInput
//             style={{
//               height: 40,
//               width: '87%',
//               color: '#333'
//             }}
//             onChangeText={handleTextChange}
//             value={text}
//             placeholder={name}
//             placeholderTextColor="#000"
//           />
//         </View>
//         )}
//       </View>
//     </>
//   );
// };

// const style = StyleSheet.create({
//   container: {
//     alignItems: 'center',
//   },
//   input: {
//     width: '80%',
//     flexDirection: 'row',
//     borderBottomColor: '#364989',
//     borderWidth: 1,
//     borderTopColor: 'transparent',
//     borderLeftColor: 'transparent',
//     borderRightColor: 'transparent',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//   },
// });
