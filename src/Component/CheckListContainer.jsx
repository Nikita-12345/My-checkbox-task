import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { addItemList, removeItemList } from '../Redux/Actions/index';


function CheckListContainer(props) {
    const [Aasiyachecked, setAasiyaChecked] = useState(false);
    const [Luvleenchecked, setLuvleenChecked] = useState(false);
    const [Reychecked, setReyChecked] = useState(false);
    const [Caylachecked, setCaylaChecked] = useState(false);
    const [Deveedaaschecked, setDeveedaasChecked] = useState(false);
    const [Obaseychecked, setObaseyChecked] = useState(false);
    const [Xeniechecked, setXenieChecked] = useState(false);
    const [Ezequielchecked, setEzequielChecked] = useState(false);
    const [Aaronchecked, setAaronChecked] = useState(false);
    const [Jelenachecked, setJelenaChecked] = useState(false);

    useEffect(() => {
        console.log('props', props.state);
        if (props.state.length === 0) {
            setAasiyaChecked(false);
            setLuvleenChecked(false);
            setReyChecked(false);
            setCaylaChecked(false);
            setDeveedaasChecked(false);
            setObaseyChecked(false);
            setXenieChecked(false);
            setEzequielChecked(false);
            setAaronChecked(false);
            setJelenaChecked(false);
        }
        else {
            for (let i = 0; i < props.state.length; i++) {
                if (props.state[i].flagValue === "Aasiyachecked") {
                    setAasiyaChecked(true);
                    break;
                } else {
                    setAasiyaChecked(false);
                }
            }

            for (let i = 0; i < props.state.length; i++) {
                if (props.state[i].flagValue === "Luvleenchecked") {
                    setLuvleenChecked(true);
                    break;
                }
                else {
                    setLuvleenChecked(false);
                }
            }

            for (let i = 0; i < props.state.length; i++) {
                if (props.state[i].flagValue === "Reychecked") {
                    setReyChecked(true);
                    break;
                }
                else {
                    setReyChecked(false);
                }
            }

            for (let i = 0; i < props.state.length; i++) {
                if (props.state[i].flagValue === "Caylachecked") {
                    setCaylaChecked(true);
                    break;
                }
                else {
                    setCaylaChecked(false);
                }
            }

            for (let i = 0; i < props.state.length; i++) {
                if (props.state[i].flagValue === "Deveedaaschecked") {
                    setDeveedaasChecked(true);
                    break;
                }
                else {
                    setDeveedaasChecked(false);
                }
            }
            for (let i = 0; i < props.state.length; i++) {
                if (props.state[i].flagValue === "Obaseychecked") {
                    setObaseyChecked(true);
                    break;
                }
                else {
                    setObaseyChecked(false);
                }
            }
            for (let i = 0; i < props.state.length; i++) {
                if (props.state[i].flagValue === "Xeniechecked") {
                    setXenieChecked(true);
                    break;
                }
                else {
                    setXenieChecked(false);
                }
            }
            for (let i = 0; i < props.state.length; i++) {
                if (props.state[i].flagValue === "Ezequielchecked") {
                    setEzequielChecked(true);
                    break;
                }
                else {
                    setEzequielChecked(false);
                }
            }
            for (let i = 0; i < props.state.length; i++) {
                if (props.state[i].flagValue === "Aaronchecked") {
                    setAaronChecked(true);
                    break;
                }
                else {
                    setAaronChecked(false);
                }
            }
            for (let i = 0; i < props.state.length; i++) {
                if (props.state[i].flagValue === "Jelenachecked") {
                    setJelenaChecked(true);
                    break;
                }
                else {
                    setJelenaChecked(false);
                }
            }
        }
    }, [props])

    return (
        <div>
            <h4>Portugal</h4>
            <div>
                <label>
                    <input className="inputALign" type="checkbox" checked={Aasiyachecked} onChange={() => { setAasiyaChecked(!Aasiyachecked); !Aasiyachecked ? props.addItemList('Portugal', 'Aasiya Jayavant', true, 'Aasiyachecked') : props.removeItemList('Portugal', 'Aasiya Jayavant', false, 'Aasiyachecked') }} />
                Aasiya Jayavant
            </label>
            </div>
            <div>
                <label>
                    <input className="inputALign" type="checkbox" checked={Luvleenchecked} onChange={() => { setLuvleenChecked(!Luvleenchecked); !Luvleenchecked ? props.addItemList('Portugal', 'Luvleen Lawrence', true, 'Luvleenchecked') : props.removeItemList('Portugal', 'Luvleen Lawrence', false, 'Luvleenchecked') }} />
                Luvleen Lawrence
            </label>
            </div>
            <div>
                <label>
                    <input className="inputALign" type="checkbox" checked={Reychecked} onChange={() => { setReyChecked(!Reychecked); !Reychecked ? props.addItemList('Portugal', 'Rey Mibourne', true, 'Reychecked') : props.removeItemList('Portugal', 'Rey Mibourne', false, 'Reychecked') }} />
                Rey Mibourne
            </label>
            </div>
            <div>
                <label>
                    <input className="inputALign" type="checkbox" checked={Caylachecked} onChange={() => { setCaylaChecked(!Caylachecked); !Caylachecked ? props.addItemList('Portugal', 'Cayla Brister', true, 'Caylachecked') : props.removeItemList('Portugal', 'Cayla Brister', false, 'Caylachecked') }} />
                Cayla Brister
            </label>
            </div>

            <h4>Nicaragua</h4>
            <div>
                <label>
                    <input className="inputALign" type="checkbox" checked={Deveedaaschecked} onChange={() => { setDeveedaasChecked(!Deveedaaschecked); !Deveedaaschecked ? props.addItemList('Nicaragua', 'Deveedaas Nandi', true, 'Deveedaaschecked') : props.removeItemList('Nicaragua', 'Deveedaas Nandi', false, 'Deveedaaschecked') }} />
                Deveedaas Nandi
            </label>
            </div>
            <div>
                <label>
                    <input className="inputALign" type="checkbox" checked={Obaseychecked} onChange={() => { setObaseyChecked(!Obaseychecked); !Obaseychecked ? props.addItemList('Nicaragua', 'Obasey Chidy', true, 'Obaseychecked') : props.removeItemList('Nicaragua', 'Obasey Chidy', false, 'Obaseychecked') }} />
                Obasey Chidy
            </label>
            </div>
            <div>
                <label>
                    <input className="inputALign" type="checkbox" checked={Xeniechecked} onChange={() => { setXenieChecked(!Xeniechecked); !Xeniechecked ? props.addItemList('Nicaragua', 'Xenie Dolezelova', true, 'Xeniechecked') : props.removeItemList('Nicaragua', 'Xenie Dolezelova', false, 'Xeniechecked') }} />
                Xenie Dolezelova
            </label>
            </div>
            <div>
                <label>
                    <input className="inputALign" type="checkbox" checked={Ezequielchecked} onChange={() => { setEzequielChecked(!Ezequielchecked); !Ezequielchecked ? props.addItemList('Nicaragua', 'Ezequiel Dengra', true, 'Ezequielchecked') : props.removeItemList('Nicaragua', 'Ezequiel Dengra', false, 'Ezequielchecked') }} />
                Ezequiel Dengra
            </label>
            </div>

            <h4>Marshall Islands</h4>
            <div>
                <label>
                    <input className="inputALign" type="checkbox" checked={Aaronchecked} onChange={() => { setAaronChecked(!Aaronchecked); !Aaronchecked ? props.addItemList('Marshall Islands', 'Aaron Almaraz', true, 'Aaronchecked') : props.removeItemList('Marshall Islands', 'Aaron Almaraz', false, 'Aaronchecked') }} />
                Aaron Almaraz
            </label>
            </div>
            <div>
                <label>
                    <input className="inputALign" type="checkbox" checked={Jelenachecked} onChange={() => { setJelenaChecked(!Jelenachecked); !Jelenachecked ? props.addItemList('Marshall Islands', 'Jelenachecked', true, 'Jelenachecked') : props.removeItemList('Marshall Islands', 'Jelena Denisova', false, 'Jelenachecked') }} />
                Jelena Denisova
            </label>
            </div>
        </div>
    )
}
const mapDispatchToProps = {
    addItemList,
    removeItemList

}
const mapStateToProps = state => {
    return {
        state
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CheckListContainer);
