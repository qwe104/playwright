/**
 * Copyright (c) Microsoft Corporation.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import * as channels from '../protocol/channels';
import * as api from '../../types/types';

export class ChromiumCoverage implements api.ChromiumCoverage {
  private _channel: channels.PageChannel;

  constructor(channel: channels.PageChannel) {
    this._channel = channel;
  }

  async startJSCoverage(options: channels.PageCrStartJSCoverageOptions = {}) {
    await this._channel.crStartJSCoverage(options);
  }

  async stopJSCoverage(): Promise<channels.PageCrStopJSCoverageResult['entries']> {
    return (await this._channel.crStopJSCoverage()).entries;
  }

  async startCSSCoverage(options: channels.PageCrStartCSSCoverageOptions = {}) {
    await this._channel.crStartCSSCoverage(options);
  }

  async stopCSSCoverage(): Promise<channels.PageCrStopCSSCoverageResult['entries']> {
    return (await this._channel.crStopCSSCoverage()).entries;
  }
}
