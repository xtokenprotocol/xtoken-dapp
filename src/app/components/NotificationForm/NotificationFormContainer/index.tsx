/**
 *
 * NotificationForm
 *
 */

import React, { useReducer, useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { useAccount } from '../../../hooks/useAccount';
import { NotificationFormComponent } from '../NotificationFormComponent';
import { EmailNotificationButton } from '../EmailNotificationButton';
import { CustomDialog } from '../../CustomDialog';
import { xToken } from '../../../../utils/xtoken';

export function NotificationForm() {
  const mailSrv = process.env.REACT_APP_MAIL_SRV;

  const walletAddress = useAccount();
  const emptyUser = {
    user_address: '',
    email: '',
    name: '',
    first_transaction: '',
    marketing: true,
    notifications: true,
    referred_by: '',
  };

  const [response, setResponse] = useState('');
  const [foundUser, setFoundUser] = useState(emptyUser);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);

  //Reducer for updating state on form change
  function reducer(state, { field, value }) {
    return {
      ...state,
      [field]: value,
    };
  }
  const initialState = {
    name: '',
    email: '',
    marketing: true,
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  const { name, email } = state;

  //Handle form change
  const onChange = e => {
    if (e.target.type === 'checkbox') {
      dispatch({ field: e.target.name, value: !state[e.target.name] });
    } else {
      dispatch({ field: e.target.name, value: e.target.value });
    }
  };

  //SET VALUES IN UPDATE FORM
  useEffect(() => {
    if (foundUser && foundUser.email && foundUser.name) {
      dispatch({ field: 'name', value: foundUser.name });
      dispatch({ field: 'email', value: foundUser.email });
      dispatch({ field: 'marketing', value: foundUser.marketing });
    }
  }, [foundUser]);

  //UPDATE OR ADD USER
  const addUser = (e, formType) => {
    e.preventDefault();
    setResponse('pending');

    const timestamp = new Date();

    const newUser = {
      name: state.name,
      email: state.email,
      walletAddress: walletAddress,
      marketing: state.marketing,
      notifications: true,
    };

    const message = `${timestamp} \n \n Please confirm that the details associated with this account will now be: \n \n Username: ${name} \n Email: ${email}`;
    const route = formType === 'signup' ? 'addUser' : 'updateUser';

    xToken.getWriteWeb3()
      .eth.personal.sign(message, walletAddress, '')
      .then(res =>
        axios
          .post(mailSrv + route, {
            ...newUser,
            signedMessage: res,
            message: message,
          })
          .then(res => {
            setResponse('success');
          })
          .catch(e => {
            setResponse('error');
            console.log(e);
          }),
      );
  };

  const getUser = useCallback(() => {
    setLoading(true);
    if (walletAddress) {
      axios
        .post(mailSrv + 'getUser', {
          walletAddress: walletAddress,
        })
        .then(res => {
          setFoundUser(res.data[0]);
          setLoading(false);
        })
        .catch(e => {
          console.log(e);
          setLoading(false);
        });
    } else {
      setFoundUser({
        user_address: '',
        email: '',
        name: '',
        first_transaction: '',
        marketing: true,
        notifications: true,
        referred_by: '',
      });
      setLoading(false);
    }
  }, [mailSrv, walletAddress]);

  //GET USER
  useEffect(() => {
    getUser();
  }, [walletAddress, mailSrv, getUser]);

  function resetForm() {
    setLoading(true);
    setShowForm(false);
    setResponse('');
    getUser();
    setLoading(false);
  }

  return (
    <>
      <div className={`d-none ${!loading && walletAddress && 'd-inline'}`}>
        <EmailNotificationButton
          text={`${
            foundUser ? 'Update email settings' : 'Get email notifications'
          }`}
          onClick={() => setShowForm(true)}
        />
      </div>
      <CustomDialog
        show={showForm}
        title="Email Notifications"
        onClose={() => resetForm()}
        content={
          <div>
            {loading || response === 'pending' ? (
              <div className="bp3-skeleton">&nbsp;</div>
            ) : (
              <div>
                {response !== 'success' && (
                  <NotificationFormComponent
                    name={name}
                    email={email}
                    marketing={state.marketing}
                    response={response}
                    onSubmit={addUser}
                    onChange={onChange}
                    formType={foundUser ? 'update' : 'signup'}
                  />
                )}
                {response === 'success' && !foundUser && (
                  <div>
                    You will now receive email notifications about margin calls
                    and liquidated positions.
                  </div>
                )}

                {response === 'success' && foundUser && (
                  <div>Your details have been updated.</div>
                )}
              </div>
            )}
          </div>
        }
      />
    </>
  );
}
