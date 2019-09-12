require 'rails_helper'

RSpec.describe Api::V1::AccessLogsController, type: :controller do
  let!(:access_log) { create(:access_log) }

  describe '#show' do
    it 'render 200' do
      process :show, method: :get
      expect(response.code).to eq '200'
    end
  end

  describe '#update' do
    context 'when success' do
      it 'render 200' do
        process :update, method: :put
        expect(response.code).to eq '200'
      end

      it 'increment amount' do
        process :update, method: :put
        access_log.reload
        expect(access_log.amount).to eq 1
      end
    end
  end
end
