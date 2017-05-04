import React from 'react';
import './Header.scss';
import ContractUtils from '../ContractUtils'

export default ({userPK, userType, networkId}) => {
    return (
        <div>
            <div className="row">
                <div className="col-xs-12 col-md-10 col-md-offset-1">
                    <div className="header">
                        Employee Stock Option Plan (ESOP) manager [on: {ContractUtils.getNetworkName(networkId)}]
                    </div>
                </div>
            </div>

            {userType === "anonymous" &&
            <div className="row introduction">
                <div className="col-xs-12 col-md-10 col-md-offset-1">

                    <div className="row">
                        <div className="col-xs-12">
                            <h2>Welcome to Neufund’s Employee Stock Option Plan (ESOP) manager.</h2>
                            <p>Neufund’s mission is to establish an active secondary market for startup equity, through providing a solution to represent startup shares as Blockchain tokens. This works also for non-Blockchain projects (e.g AI, biotech, hardware etc.) To demonstrate to the Blockchain community that our concept has practical potential, we have converted the 10% pool of Neufund stock reserved for the employees into Ethereum tokens, and have provided a smart contract to govern it in place of a legal agreement. Now any incorporated startup can use our solution to implement their ESOP on Blockchain.</p>
                            <p>For startups there is a number of upshots to implementing an ESOP on Blockchain: *</p>
                            <ol>
                                <li><p>There is a certain opaqueness surrounding option grants and their potential value.  Most startup employees do not have enough information to properly evaluate the offer they receive, nor compare it against industry benchmarks. This can be mitigated by employers granting and managing options on Blockchain, in an immutable and transparent smart contract and providing trustless trust <a href="http://banciur.org">(read more about the concept)</a>.</p></li>
                                <li><p>Today many startup employees see options as a bonus that may or may not arrive, at a potential exit in 5-10 years. This is a quite intangible incentive accessible only in a very long time horizon, which is why employees often completely ignore stock options when evaluating a job offer. In Neufund’s concept the tokenized ESOP allows for a liquid asset position if the company issuing the ESOP either permits trading of vested options on Blockchain exchanges (like Kraken or Poloniex), or lets the employees convert their options into other tradable tokens in an ICO. This creates a secondary option-token market from which both employers and employees benefit greatly - employees would likely be a lot more incentivized by options which they could monetize within a shorter time (e.g. 1-2 years). <a href="http://banciur.org">(for more read here)</a></p></li>
                                <li><p>Smart contracts enforce the performance of the ESOP agreement between the employer and employee, and make contractual clause unnecessary. This makes the management and maintenance of often very complicated ESOP algorithms a lot easier and cheaper for the startup, and a lot more trustworthy for the employees. In our concept, however, the employees are additionally protected by legal clause, enforceable through standard legal proceedings and court orders, in case smart contract or Ethereum Blockchain fails. The templates for this are also provided in our solution for any startup to use.</p></li>
                            </ol>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-xs-4">
                            <div className="introduction_column_header">
                                <i className="material-icons">mode_edit</i>
                            </div>
                            <div>
                                <p>If you are Neufund employee or CEO you can log in with Ledger NANO S or Metamask.</p>
                                <p>As a Contract Owner you will be able to add employees and manage their plan.</p>
                                <p>As an Employee you will be able to confirm the ownership of your stock and sign the contract.</p>
                            </div>
                        </div>
                        <div className="col-xs-4">
                            <div className="introduction_column_header">
                                <i className="material-icons">build</i>
                            </div>
                            <div>
                                <p>If you want to build your employee stock option plan based on Neufund’s solution <a href="https://github.com/Neufund/ESOP">go to GitHub</a>. Neufund ESOP smart contract is open sourced and available to anyone on the MIT license. Instructions are provided on the GitHub page, if you have any questions go to <a href="https://neufundorg.signup.team/">Slack</a> or <a href="https://gitter.im/Neufund">Gitter</a>.</p>
                            </div>
                        </div>
                        <div className="col-xs-4">
                            <div className="introduction_column_header">
                                <i className="material-icons">remove_red_eye</i>
                            </div>
                            <div>
                                <p>If you are interested in the legal side of the idea of tokenizing options read our <a href="http://banciur.org">Medium Post</a>.</p>
                                <p>If you are interested on the detailed rules governing the contract go to <a href="http://banciur.org">Github</a>.</p>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-xs-12">
                            <p>*As for today Neufund ESOP is deployed on testnet.</p>
                        </div>
                    </div>
                </div>
            </div>
            }

            <div className="row">
                <div className="col-xs-12 col-md-10 col-md-offset-1">
                    {userPK !== undefined &&
                    <div>
                        <p>Hello, you provided us with address: <b>{userPK}</b></p>
                        {userType === "anonymous" ?
                            <p>If you are Neufund employee, please pass address above to us to be included in ESOP.</p>
                            :
                            <p>Your position: {userType}</p>
                        }
                    </div>
                    }
                </div>
            </ div>
        </ div>
    )
}