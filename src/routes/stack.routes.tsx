import { createStackNavigator } from "@react-navigation/stack";
import  Main  from "../screens/Main/main";
import  Skill  from "../screens/Skill/skill";

const {Screen, Navigator } = createStackNavigator();

export function StackRoutes(){
    return(
        <Navigator>
            <Screen 
                name='Main'
                component={Main}
                options={{
                    title: 'Início',
                }}
            />

            <Screen
                name='Skill'
                component={Skill}
                options={{
                    title:'Habilidade',
                }}
            />
        </Navigator>
    )
}